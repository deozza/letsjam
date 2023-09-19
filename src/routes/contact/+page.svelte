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

    const radioDevChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('dev-choice')
        .setChecked(true)

    const radioCourseChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('course-choice')

    const otherChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('other-choice')
    
    const radioDevChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('information-type-choice', 'Votre site web').setSpacing(false)
    const radioCourseChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('information-type-choice', 'Un cours à donner').setSpacing(false)
    const otherChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('information-type-choice', 'Autre').setSpacing(false)

    const informationTypeRadioChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('information-type-choice')
        .addChoice({label: radioDevChoiceInputLabel, input: radioDevChoiceInput})
        .addChoice({label: radioCourseChoiceInputLabel, input: radioCourseChoiceInput})
        .addChoice({label: otherChoiceInputLabel, input: otherChoiceInput})
        .setValue([radioDevChoiceInput.value])

    const informationTypeRadioChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('information-type-choice', 'Objet :')
    
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
        .setNetlifyRecaptchaEnabled(true)
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
    
    async function handleForm(e: any){
        submitButton.setLoaderOn()
        submitButton = submitButton

        tanoshiFormModel.setSubmitButton(submitButton)
        tanoshiFormModel = tanoshiFormModel

        let formData: FormData = new FormData()
        tanoshiFormModel.values.forEach((element: {id: string, value: any}) => {
            formData.append(element.id, element.value)
        });

        await fetch("/", {
            method: "POST",
            body: formData,
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

            <TanoshiForm {tanoshiFormModel} on:submit={(e) => handleForm(e)}/>

            <TanoshiAlert tanoshiAlertModel={formSubmitSuccessAlert} />

        </TanoshiContainer>
    </TanoshiContainer>
</section>
