<script lang="ts">
	import { 
        CONTAINER_ITEMS_SPACING, 
        CONTAINER_ORIENTATIONS, 
        THEMES, 
        TanoshiContainerMaterial, 
        TanoshiContainerModel, 
		TanoshiTextInputModel,
		INPUT_TEXT_TYPES,
		TanoshiLabelModel,
		TanoshiTextareaInputModel,
		TanoshiButtonModel,
		BUTTON_TYPES,
		TanoshiFormModel,
		TanoshiLabelAndInputModel,
		TanoshiTextInputNeumorphism,
		TanoshiTextareaInputMaterial,
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
		TanoshiAlertMaterial,
		BUTTON_SIZES,
		TanoshiFormNeumorphism,
		TanoshiButtonNeumorphism,
		TanoshiTextareaInputNeumorphism,
		TanoshiAlertNeumorphism,
        } from "tanoshi";

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
        .setBackgroundTheme(THEMES.Black)
        .setBorderShape(CONTAINER_BORDERS.Full)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)
    const emailLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(emailInput)
        .setValue('Email :')
        .setTheme(THEMES.White)

    const nameInput: TanoshiTextInputModel = new TanoshiTextInputModel('name')
        .setType(INPUT_TEXT_TYPES.Text)
        .setPlaceholder('Votre nom')
        .setRequired(true)
        .setBackgroundTheme(THEMES.Black)
        .setBorderShape(CONTAINER_BORDERS.Full)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)
    const nameLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(nameInput)
        .setValue('Votre nom :')
        .setTheme(THEMES.White)

    const radioDevChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('devChoice')
        .setChecked(true)

    const radioCourseChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('courseChoice')

    const otherChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('otherChoice')
    
    const radioDevChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('devChoice', 'Votre site web').setSpacing(false).setTheme(THEMES.White)
    const radioCourseChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('courseChoice', 'Un cours à donner').setSpacing(false).setTheme(THEMES.White)
    const otherChoiceInputLabel: TanoshiLabelModel = new TanoshiLabelModel('otherChoice', 'Autre').setSpacing(false).setTheme(THEMES.White)

    const informationTypeRadioChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('informationTypeChoice')
        .addChoice({label: radioDevChoiceInputLabel, input: radioDevChoiceInput})
        .addChoice({label: radioCourseChoiceInputLabel, input: radioCourseChoiceInput})
        .addChoice({label: otherChoiceInputLabel, input: otherChoiceInput})
        .setValue([radioDevChoiceInput.value])
        

    const informationTypeRadioChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('informationTypeChoice', 'Objet :').setTheme(THEMES.White)
    
    const contentInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('content')
        .setId('content')
        .setName('content')
        .setRequired(true)
        .setPlaceholder('Votre message')
        .setBackgroundTheme(THEMES.Black)
        .setBorderShape(CONTAINER_BORDERS.Full)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)
    const contentLabel: TanoshiLabelModel = new TanoshiLabelModel()
        .initWithInput(contentInput)
        .setValue('Votre message :')
        .setTheme(THEMES.White)
        
    let submitButton: TanoshiButtonModel = new TanoshiButtonModel('Envoyer')
        .setType(BUTTON_TYPES.Submit)
        .setBasicTheme(THEMES.Black)
        .setTextTheme(THEMES.Primary)
        .setTextHoverTheme(THEMES.Primary)
        .setSize(BUTTON_SIZES.Md)
        .setShape(CONTAINER_BORDERS.Full)

    let tanoshiFormModel: TanoshiFormModel = new TanoshiFormModel(submitButton, 'contact')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailLabel, emailInput, TanoshiTextInputNeumorphism))
        .addLabelAndInput(new TanoshiLabelAndInputModel(nameLabel, nameInput, TanoshiTextInputNeumorphism))
        .addLabelAndInput(new TanoshiLabelAndInputModel(informationTypeRadioChoiceGroupLabelModel, informationTypeRadioChoiceGroupModel, TanoshiChoiceGroup))
        .addLabelAndInput(new TanoshiLabelAndInputModel(contentLabel, contentInput, TanoshiTextareaInputNeumorphism))
        .setPreventDefault(true)

    tanoshiFormModel.container
        .setWidth(WIDTHS.W8)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)

    let formSubmitSuccessAlert: TanoshiAlertModel = new TanoshiAlertModel('Votre message a bien été envoyé.')
        .setBackgroundTheme(THEMES.Black)
        .setVisible(false)
        .setContainerSize(WIDTHS.W8)
        .setTitleTheme(THEMES.White)

    let formSubmitFailAlert: TanoshiAlertModel = new TanoshiAlertModel('Une erreur est survenue. Veuillez réessayer plus tard.')
        .setBackgroundTheme(THEMES.Black)
        .setVisible(false)
        .setContainerSize(WIDTHS.W8)
        .setTitleTheme(THEMES.Danger)

    async function handleSubmit() {
        submitButton.setLoaderOn()
        submitButton = submitButton
        tanoshiFormModel.setSubmitButton(submitButton)
        tanoshiFormModel = tanoshiFormModel
        await fetch('/api/contact', {
            method: 'POST',
            body: tanoshiFormModel.formData
        })
        .then( response => {
            if(response.status === 400){
                formSubmitFailAlert
                    .setVisible(true)
                formSubmitFailAlert = formSubmitFailAlert

                submitButton.setLoaderOff()
                submitButton = submitButton
                tanoshiFormModel.setSubmitButton(submitButton)
                tanoshiFormModel = tanoshiFormModel
                return
            }

            formSubmitSuccessAlert.setVisible(true)
            formSubmitSuccessAlert = formSubmitSuccessAlert
            submitButton.setLoaderOff()
            submitButton.setIsDisabled(true)
            submitButton = submitButton
            tanoshiFormModel.setSubmitButton(submitButton)
            tanoshiFormModel = tanoshiFormModel

        })
    } 

</script>

<svelte:head>
  <title>Letsjam - composons votre site web !</title>
  <meta name="description" content="Développeur web freelance spécialisé dans la création, l'hébergement et la maintenance de sites webs pour les artisans de la musique" />
</svelte:head>

<section id="hero">


    <TanoshiContainerMaterial tanoshiContainerModel={heroContentContainer}>
        <TanoshiHeader tanoshiHeaderModel={contactHeader} />
        <TanoshiParagraph tanoshiParagraphModel={contactParagraph} />
        <TanoshiFormNeumorphism {tanoshiFormModel} tanoshiButtonComponent={TanoshiButtonNeumorphism} on:submit={handleSubmit}/>
        <TanoshiAlertNeumorphism tanoshiAlertModel={formSubmitSuccessAlert} />
        <TanoshiAlertNeumorphism tanoshiAlertModel={formSubmitFailAlert} />
    </TanoshiContainerMaterial>
</section>