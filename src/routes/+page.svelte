<script lang="ts">
	import { TanoshiButtonModel, TanoshiContainer, TanoshiContainerModel, TanoshiHeader, TanoshiHeaderModel, TanoshiLink, TanoshiLinkModel, TanoshiParagraph, TanoshiParagraphModel } from "tanoshi";

    const heroBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setTheme('primary')
        .setDesktopSpacing('centered')
        .setHeight('min-h-100-vh')

    const heroContentContainer: TanoshiContainerModel = new TanoshiContainerModel('r')
        .setDesktopSpacing('around')

    const heroLeftContentContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setDesktopSpacing('centered')
        .setItemsAlignment('center')
        .setSize('w-10')

    const heroHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Composons ensemble votre site web')
        .setDisplaySize('6xl')
        .setHtmlSize('h1')
        .setAligment('center');

    const heroParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("AUDIT, CONCEPTION, DÉVELOPPEMENT, HÉBERGEMENT, MAINTENANCE")
        .setDisplaySize('3xl')
        .setAlignment('center')
        .setHasSpacing(false);

    const heroParagraphBisModel : TanoshiParagraphModel = new TanoshiParagraphModel("POUR LES ARTISANS DE LA MUSIQUE")
        .setDisplaySize('3xl')
        .setAlignment('center')
        .setHasSpacing(false);

    const aboutBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel('r')
        .setHeight('min-h-100-vh')
        .setDesktopSpacing('around')

    const aboutContentHalfLeftContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setDesktopSpacing('centered')
        .setItemsAlignment('start')
        .setSize('w-6')
        .setHeight('min-h-100-vh')

    const aboutContentHalfRightContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setDesktopSpacing('centered')
        .setSize('w-6')
        .setHeight('min-h-100-vh')
        .setItemsAlignment('center')

    const aboutHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('A propos de moi')
        .setDisplaySize('6xl')
        .setHtmlSize('h2')
        .setAligment('center')
        .setTheme('primary');

    const emptyBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel('r')
        .setDesktopSpacing('centered')

    const servicesHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Mes services')
        .setDisplaySize('6xl')
        .setHtmlSize('h2')
        .setAligment('center')
        .setTheme('black');

    const servicesContentContainer: TanoshiContainerModel = new TanoshiContainerModel('r')
        .setDesktopSpacing('around')
    
    const servicesContentLeftContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setTheme('primary')
        .setSize('w-6')
        .setHeight('min-h-100-vh')
        .setItemsAlignment('center')

    const servicesDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Développement')
        .setDisplaySize('4xl')
        .setHtmlSize('h3')
        .setAligment('center')
        .setTheme('black');

    const servicesContentRightContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setTheme('dark')
        .setSize('w-6')
        .setHeight('min-h-100-vh')
        .setItemsAlignment('center')

    const devKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setTheme('dark')

    const devKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setContentAsButton(devKnowMoreButton)
        .setLink('/website-creation')

    const servicesFormationsHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formations')
        .setDisplaySize('4xl')
        .setHtmlSize('h3')
        .setAligment('center')
        .setTheme('primary');

    const formationKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setTheme('primary')

    const formationKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setContentAsButton(formationKnowMoreButton)
        .setLink('/courses')

    const contactBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel('c')
        .setTheme('primary')
        .setDesktopSpacing('centered')

    const contactContentContainer: TanoshiContainerModel = new TanoshiContainerModel('r')
        .setDesktopSpacing('around')
    
    const contactHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Une question ? Contactez-moi !')
        .setDisplaySize('6xl')
        .setHtmlSize('h2')
        .setAligment('center');

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
            <TanoshiLink tanoshiLinkModel={devKnowMoreLink} />

        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={servicesContentRightContainer}>
            <TanoshiHeader tanoshiHeaderModel={servicesFormationsHeader} />
            <TanoshiLink tanoshiLinkModel={formationKnowMoreLink} />
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