<script lang="ts">
	import { 
        CONTAINER_ITEMS_ALIGNMENTS, 
        CONTAINER_ITEMS_SPACING, 
        CONTAINER_ORIENTATIONS, 
        HEADER_TAGS, 
        HEIGHTS, 
        SIZES, 
        TEXT_ALIGNMENT, 
        THEMES, 
        WIDTHS,
        TanoshiButtonModel, 
        TanoshiContainer, 
        TanoshiContainerModel, 
        TanoshiHeader, 
        TanoshiHeaderModel,
        TanoshiLinkModel, 
        TanoshiParagraph, 
        TanoshiParagraphModel,
		TanoshiLinkAsButtonModel,
		TanoshiLinkAsButton,
        } from "tanoshi";

    const heroBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setHeight(HEIGHTS.MINH100VH)

    const heroContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)

    const heroLeftContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W10)

    const heroHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Composons ensemble votre site web')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H1)
        .setAligment(TEXT_ALIGNMENT.Center);

    const heroParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("AUDIT, CONCEPTION, DÉVELOPPEMENT, HÉBERGEMENT, MAINTENANCE")
        .setSize(SIZES["3Xl"])
        .setAlignment(TEXT_ALIGNMENT.Center)
        .setHasSpacing(false);

    const heroParagraphBisModel : TanoshiParagraphModel = new TanoshiParagraphModel("POUR LES ARTISANS DE LA MUSIQUE")
        .setSize(SIZES["3Xl"])
        .setAlignment(TEXT_ALIGNMENT.Center)
        .setHasSpacing(false);

    const aboutBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setHeight(HEIGHTS.MINH100VH)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)

    const aboutContentHalfLeftContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)

    const aboutContentHalfRightContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const aboutHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('A propos de moi')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);

    const emptyBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)

    const servicesHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Mes services')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black);

    const servicesContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
    
    const servicesContentLeftContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const servicesDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Développement')
        .setSize(SIZES["4Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black);

    const servicesContentRightContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Black)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const devKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Black)
    const devKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/website-creation')
    const devKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(devKnowMoreLink, devKnowMoreButton)

    const servicesFormationsHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formations')
        .setSize(SIZES["4Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);

    const formationKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Primary)
    const formationKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/courses')
    const formationKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(formationKnowMoreLink, formationKnowMoreButton)

    const contactBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)

    const contactContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
    
    const contactHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Une question ? Contactez-moi !')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center);

</script>

<svelte:head>
  <title>Letsjam - composons votre site web !</title>
  <meta name="description" content="Développeur web freelance spécialisé dans la création, l'hébergement et la maintenance de sites webs pour les artisans de la musique" />
</svelte:head>

<section id="hero">
    <TanoshiContainer tanoshiContainerModel={heroBackgroundContainer}>
        <TanoshiContainer tanoshiContainerModel={heroContentContainer}>
            <TanoshiContainer tanoshiContainerModel={heroLeftContentContainer}>
                <TanoshiHeader tanoshiHeaderModel={heroHeaderModel} />
                <TanoshiParagraph tanoshiParagraphModel={heroParagraphModel} />
                <TanoshiParagraph tanoshiParagraphModel={heroParagraphBisModel} />
            </TanoshiContainer>
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="about">
    <TanoshiContainer tanoshiContainerModel={aboutBackgroundContainer}>
        <TanoshiContainer tanoshiContainerModel={aboutContentHalfLeftContainer}>
            <TanoshiHeader tanoshiHeaderModel={aboutHeaderModel} />
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={aboutContentHalfRightContainer}>
            <TanoshiHeader tanoshiHeaderModel={aboutHeaderModel} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="services">
    <TanoshiContainer tanoshiContainerModel={emptyBackgroundContainer}>
        <TanoshiHeader tanoshiHeaderModel={servicesHeaderModel} />
    </TanoshiContainer>

    <TanoshiContainer tanoshiContainerModel={servicesContentContainer} customClasses={'no-padding'}>
        <TanoshiContainer tanoshiContainerModel={servicesContentLeftContainer}>
            <TanoshiHeader tanoshiHeaderModel={servicesDevelopmentHeader} />
            <TanoshiLinkAsButton tanoshiLinkModel={devKnowMoreLinkAsButton} />
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={servicesContentRightContainer}>
            <TanoshiHeader tanoshiHeaderModel={servicesFormationsHeader} />
            <TanoshiLinkAsButton tanoshiLinkModel={formationKnowMoreLinkAsButton} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="contact">
    <TanoshiContainer tanoshiContainerModel={emptyBackgroundContainer}>        
        <TanoshiHeader tanoshiHeaderModel={contactHeaderModel} />
    </TanoshiContainer>

    <TanoshiContainer tanoshiContainerModel={contactBackgroundContainer}>        
        <TanoshiContainer tanoshiContainerModel={contactContentContainer}>        
            <TanoshiHeader tanoshiHeaderModel={contactHeaderModel} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>