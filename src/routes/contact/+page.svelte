<script context="module">
    export const prerender = true
</script>

<script lang="ts">
	import { 
        CONTAINER_ITEMS_SPACING, 
        CONTAINER_ORIENTATIONS, 
        HEIGHTS, 
        THEMES, 
        TanoshiContainer, 
        TanoshiContainerModel, 
		TanoshiTextInputModel,
		INPUT_TEXT_TYPES,
		TanoshiLabelModel,
		TanoshiTextareaInputModel,
		TanoshiButtonModel,
		BUTTON_TYPES,
		TanoshiFormModel,
		TanoshiLabelAndInputModel,
		TanoshiTextInput,
		TanoshiTextareaInput,
		TanoshiForm,
		WIDTHS,
		CONTAINER_BORDERS,
		TanoshiChoiceInputModel,
		TanoshiChoiceGroupModel,
		TanoshiChoiceGroup,
		TanoshiHeaderModel,
		TanoshiHeader,
		HEADER_TAGS,
		SIZES,
		CONTAINER_ITEMS_ALIGNMENTS,
		TanoshiParagraphModel,
		TanoshiParagraph,
		TEXT_ALIGNMENT,
		TanoshiAlertModel,
		TanoshiAlert,
        } from "tanoshi";


    const heroBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Black)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setHeight(HEIGHTS.MINH100VH)

    const heroContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const contactHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Contactez-moi')
        .setTheme(THEMES.Primary)
        .setTag(HEADER_TAGS.H1)
        .setSize(SIZES["6Xl"])

    const contactParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Une question sur votre projet ? Un site à auditer ? Un cours à animer ? N'hésitez pas à me contacter pour en discuter.")
        .setTheme(THEMES.White)
        .setSize(SIZES["2Xl"])
        .setAlignment(TEXT_ALIGNMENT.Center)

    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setPlaceholder('Votre email')
        .setRequired(true)
    const emailLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(emailInput)
        .setValue('Email :')

    const nameInput: TanoshiTextInputModel = new TanoshiTextInputModel('name')
        .setType(INPUT_TEXT_TYPES.Text)
        .setPlaceholder('Votre nom')
        .setRequired(true)
    const nameLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(nameInput)
        .setValue('Votre nom :')

    const radioDevChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('devChoice')
        .setChecked(true)

    const radioCourseChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('courseChoice')

    const otherChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('otherChoice')
    
    const radioDevChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('devChoice', 'Votre site web').setSpacing(false)
    const radioCourseChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('courseChoice', 'Un cours à donner').setSpacing(false)
    const otherChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('otherChoice', 'Autre').setSpacing(false)

    const informationTypeRadioChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('informationTypeChoice')
        .addChoice({label: radioDevChoiceInputLabel, input: radioDevChoiceInput})
        .addChoice({label: radioCourseChoiceInputLabel, input: radioCourseChoiceInput})
        .addChoice({label: otherChoiceInputLabel, input: otherChoiceInput})
        .setValue([radioDevChoiceInput.value])

    const informationTypeRadioChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('informationTypeChoice', 'Objet :')
    
    const contentInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('content')
        .setId('content')
        .setName('content')
        .setRequired(true)
        .setPlaceholder('Votre message')
    const contentLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(contentInput)
        .setValue('Votre message :')
    
    let submitButton: TanoshiButtonModel = new TanoshiButtonModel('Envoyer')
        .setType(BUTTON_TYPES.Submit)
        .setBasicTheme(THEMES.Primary)

    let tanoshiFormModel: TanoshiFormModel = new TanoshiFormModel(submitButton, 'contact')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(nameLabel, nameInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(informationTypeRadioChoiceGroupLabelModel, informationTypeRadioChoiceGroupModel, TanoshiChoiceGroup))
        .addLabelAndInput(new TanoshiLabelAndInputModel(contentLabel, contentInput, TanoshiTextareaInput))
        .setNetlifyEnabled(true)

    tanoshiFormModel.container
        .setWidth(WIDTHS.W8)
        .setBorderTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.Md)

    let formSubmitSuccessAlert: TanoshiAlertModel = new TanoshiAlertModel('Votre message a bien été envoyé.')
        .setBackgroundTheme(THEMES.Primary)
        .setVisible(false)
        .setContainerSize(WIDTHS.W8)
        .setTitleTheme(THEMES.White)
    
    async function handleForm(){
        submitButton.setLoaderOn()
        submitButton = submitButton

        tanoshiFormModel.setSubmitButton(submitButton)
        tanoshiFormModel = tanoshiFormModel

        let formData: FormData = new FormData()
        tanoshiFormModel.values.forEach((element: {id: string, value: any}) => {
            formData.append(element.id, element.value)
        });
        formData.append('form-name', tanoshiFormModel.name)

        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
            submitButton.setLoaderOff()
            submitButton.setIsDisabled(true)
            submitButton = submitButton 

            tanoshiFormModel.setSubmitButton(submitButton)
            tanoshiFormModel = tanoshiFormModel

            formSubmitSuccessAlert.setVisible(true)
            formSubmitSuccessAlert = formSubmitSuccessAlert
        })
        .catch((error) => {
            submitButton.setLoaderOff()
            submitButton = submitButton 

            tanoshiFormModel.setSubmitButton(submitButton)
            tanoshiFormModel = tanoshiFormModel
            alert(error)
        });
    }
    

</script>

<svelte:head>
  <title>Letsjam - composons votre site web !</title>
  <meta name="description" content="Développeur web freelance spécialisé dans la création, l'hébergement et la maintenance de sites webs pour les artisans de la musique" />
</svelte:head>

<section id="hero">

    <TanoshiContainer tanoshiContainerModel={heroBackgroundContainer}>

        <TanoshiContainer tanoshiContainerModel={heroContentContainer}>
            <TanoshiHeader tanoshiHeaderModel={contactHeader} />
            <TanoshiParagraph tanoshiParagraphModel={contactParagraph} />
            <TanoshiForm {tanoshiFormModel} on:submit={handleForm}/>
                <!-- <form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/contact">
                    <input type="hidden" name="form-name" value="netlify-form-example" />
                    <label for="name">Name</label>
                    <input name="name" id="name" required placeholder="Name" type="text" />
                    <label for="email">Email</label>
                    <input name="email" id="email" required placeholder="Email" type="email" />
                    <label for="message">Message</label>
                    <input name="message" id="message" required placeholder="Message" type="text" />
                    <input type="submit" value="Submit" />
                  </form> -->
            <TanoshiAlert tanoshiAlertModel={formSubmitSuccessAlert} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>