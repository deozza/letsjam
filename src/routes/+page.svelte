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
		CONTAINER_BORDERS,
		TanoshiImageModel,
		TanoshiLinkAsImage,
		TanoshiLinkAsImageModel,
		BUTTON_SIZES,
		TanoshiImage,
        } from "tanoshi";

   
    const heroRowContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setMobileOrientation(CONTAINER_ORIENTATIONS.CReverse)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setWidth(WIDTHS.MinW12)

    const heroLeftContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
        .setWidth(WIDTHS.W6)
        .setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const heroHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Composons ensemble votre site web")
        .setTheme(THEMES.Black)
        .setTag(HEADER_TAGS.H1)
        .setSize(SIZES["5Xl"])

    const heroRightContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W6)

    const heroImage: TanoshiImageModel = new TanoshiImageModel('/images/logo.jpg', 'letsjam logo')

    const aboutColumnContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const aboutHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('A propos de moi')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);

    const aboutParagraphsContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W6)

    const aboutParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("Développeur web freelance expérimenté avec plus de 5 ans d'expérience dans la création et la maintenance de sites pour des startups et des grands groupes. Je me spécialise aujourd'hui dans la création de sites vitrines pour les artisans de la musique.")
        .setSize(SIZES.Xl)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const aboutParagraph2Model: TanoshiParagraphModel = new TanoshiParagraphModel("Maitrisant les technologies modernes du web, je vous accompagne pour concevoir des solutions durables, adaptées à tous les supports et accessibles pour tous les utilisateurs.")
        .setSize(SIZES.Xl)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const aboutCourseParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel("La transmission de ces connaissances et de ce savoir-faire est importante pour moi. J'anime des interventions et des cours dans des écoles du digital pour les partager avec la nouvelle génération de développeurs et développeuses.")
        .setSize(SIZES.Xl)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const aboutImageContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setBorderShape(CONTAINER_BORDERS.Md)

    const serviceHalfLeftContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setWidth(WIDTHS.W6)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setHeight(HEIGHTS.HAUTO)

    const serviceHalfRightContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setWidth(WIDTHS.W6)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHeight(HEIGHTS.HAUTO)

    const serviceRowContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const servicesDevContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHeight(HEIGHTS.MINH100VH)
        .setWidth(WIDTHS.W6)

    const servicesDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Développement')
        .setSize(SIZES["4Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black);

    const serviceItemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const auditDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Audit de votre site')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)

    const auditDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Analyse de votre site pour en déterminer les points forts et les points faibles. Je vous propose ensuite des solutions pour améliorer votre site et le rendre plus performant.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const upgradeDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Amélioration de votre site')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)

    const upgradeDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Vous avez déjà un site et vous souhaitez lui rajouter des fonctionnalités, améliorer ses performances ou moderniser son look.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const fulldevDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Création complète")
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)

    const fulldevDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Conception et création complète de votre site pour mettre en avant votre marque et vos produits.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const devKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Black)
        .setSize(BUTTON_SIZES.Lg)
    const devKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('dev')
        .setLink('/contact')
    const devKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(devKnowMoreLink, devKnowMoreButton)

    const servicesImageContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W6)

    const servicesFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formations')
        .setSize(SIZES["4Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black);

    const backendFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formation backend')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.Black)

    const backendFormationParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formations sur le langage PHP, le framework Symfony, les bases de données MySQL, aux API.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.Black)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const frontendFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formation frontend')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.Black)

    const frontendFormationParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formation au HTML/CSS, à JS, aux framework Sveltekit et NuxtJS, à Firebase, au SEO.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.Black)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const toolsFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Formation aux outils et techniques")
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.Black)

    const toolsParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formation à la refactorisation, aux tests, à Docker, à la CI/CD.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.Black)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const formationKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Black)
        .setTextTheme(THEMES.White)
        .setSize(BUTTON_SIZES.Lg)
    const formationKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/contact')
    const formationKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(formationKnowMoreLink, formationKnowMoreButton)

    const trustedByHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel("Ils m'ont fait confiance")
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);
    
    const trustedByContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setWidth(WIDTHS.W12)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setBackgroundTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Md)

    const trustedByContentItemsContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setWidth(WIDTHS.W10)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    
    const itemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
		.setBorderTheme(THEMES.Black)
		.setBorderShape(CONTAINER_BORDERS.Md)
		.setWidth(WIDTHS.W3)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const trustedByItems = [
        {
            header:  new TanoshiHeaderModel("").setSize(SIZES.Xl).setTag(HEADER_TAGS.H4),
            content: new TanoshiParagraphModel("Intervenant pour des cours sur les framework Symfony, Sveltekit, Nuxtjs et la QA.").setSize(SIZES.Lg).setHasSpacing(false),
            image: new TanoshiLinkAsImageModel(new TanoshiLinkModel("EEMI").setLink("https://www.eemi.com/").setIsInternal(false), new TanoshiImageModel("/images/eemi.jpg", "eemi"))
        },
    ]

    const contactColumnContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        
    const contactHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Une question ? Contactez-moi !')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black);

    const contactParagraphsContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W6)
        .setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
    
    const contactParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("Une question sur votre projet ? Un site à auditer ? Un cours à animer ? N'hésitez pas à me contacter pour en discuter.")
        .setAlignment(TEXT_ALIGNMENT.Center)
        .setSize(SIZES.Lg)
        .setHasSpacing(false);

    const contactButton: TanoshiButtonModel = new TanoshiButtonModel('Me contacter')
        .setBasicTheme(THEMES.Black)
        .setSize(BUTTON_SIZES.Lg)

    const contactLink: TanoshiLinkModel = new TanoshiLinkModel('Contacter')
        .setLink('/contact')
    const contactLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(contactLink, contactButton)

</script>

<svelte:head>
  <title>Letsjam - composons votre site web !</title>
  <meta name="description" content="Développeur web freelance spécialisé dans la création, l'hébergement et la maintenance de sites webs pour les artisans de la musique" />
</svelte:head>

<section id="hero">
   <TanoshiContainer tanoshiContainerModel={heroRowContainer}>
        <TanoshiContainer tanoshiContainerModel={heroLeftContainer}>
            <TanoshiHeader tanoshiHeaderModel={heroHeader} />
            <p class="sub-header text-2xl h-black text-left">Audit, conception, développement, hébergement, maintenance pour les <span class="text-3xl">artisans de la musique</span></p>
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={heroRightContainer}>
            <TanoshiImage tanoshiImageModel={heroImage} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="about">
    <TanoshiContainer tanoshiContainerModel={aboutColumnContainer}>
        <TanoshiHeader tanoshiHeaderModel={aboutHeaderModel} />
        <TanoshiContainer tanoshiContainerModel={aboutParagraphsContainer} customClasses={'no-padding'}>
            <TanoshiParagraph tanoshiParagraphModel={aboutParagraphModel} />
            <TanoshiParagraph tanoshiParagraphModel={aboutParagraph2Model} />
            <TanoshiParagraph tanoshiParagraphModel={aboutCourseParagraphModel} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="about-image">
    <TanoshiContainer tanoshiContainerModel={aboutImageContainer} customClasses={'about-bg-image'}>
    </TanoshiContainer>    
</section>

<section id="services-dev">
    <TanoshiContainer tanoshiContainerModel={serviceRowContainerModel} customClasses={'no-padding'}>

        <TanoshiContainer tanoshiContainerModel={servicesDevContainer} customClasses={'no-padding'}>
            <TanoshiHeader tanoshiHeaderModel={servicesDevelopmentHeader} />
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={auditDevelopmentHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={auditDevelopmentParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel} customClasses={'hide-mobile'}>
                    <iconify-icon icon="fontisto:zoom" color="#000" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>

            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={upgradeDevelopmentHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={upgradeDevelopmentParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel} customClasses={'hide-mobile'}>
                    <iconify-icon icon="mdi:creation" color="#000" height="100" width="100"></iconify-icon>

                </TanoshiContainer>
            </TanoshiContainer>
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={fulldevDevelopmentHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={fulldevDevelopmentParagraph} />

                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel} customClasses={'hide-mobile'}>
                    <iconify-icon icon="fluent-mdl2:edit-create" color="#000" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>

                <TanoshiLinkAsButton tanoshiLinkModel={devKnowMoreLinkAsButton} />
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={servicesImageContainer} customClasses={'services-dev-bg-image'}>
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="services-formation">

    <TanoshiContainer tanoshiContainerModel={serviceRowContainerModel} customClasses={'no-padding'}>
        <TanoshiContainer tanoshiContainerModel={servicesImageContainer} customClasses={'services-formations-bg-image'}>
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={servicesDevContainer} customClasses={'no-padding'}>
            <TanoshiHeader tanoshiHeaderModel={servicesFormationHeader} />
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={backendFormationHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={backendFormationParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel} customClasses={'hide-mobile'}>
                    <iconify-icon icon="mdi:server" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>

            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={frontendFormationHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={frontendFormationParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel} customClasses={'hide-mobile'}>
                    <iconify-icon icon="mdi:language-html5" height="100" width="100"></iconify-icon>

                </TanoshiContainer>
            </TanoshiContainer>
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={toolsFormationHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={toolsParagraph} />

                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel} customClasses={'hide-mobile'}>
                    <iconify-icon icon="fa:gears" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>            
            <TanoshiLinkAsButton tanoshiLinkModel={formationKnowMoreLinkAsButton} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="trustedBy">

    <TanoshiContainer tanoshiContainerModel={trustedByContentContainer}>
        <TanoshiHeader tanoshiHeaderModel={trustedByHeaderModel} />

        <TanoshiContainer tanoshiContainerModel={trustedByContentItemsContainer}>
            {#each trustedByItems as trustedByItem}
                <TanoshiContainer tanoshiContainerModel={itemContainer} customClasses={'trustedByItem'}>
                    {#if trustedByItem.image}
                        <TanoshiLinkAsImage tanoshiLinkModel={trustedByItem.image} />
                    {/if}
                    <TanoshiHeader tanoshiHeaderModel={trustedByItem.header} />
                    <TanoshiParagraph tanoshiParagraphModel={trustedByItem.content} />
                </TanoshiContainer>
            {/each}
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="contact">

    <TanoshiContainer tanoshiContainerModel={contactColumnContainer}>
        <TanoshiHeader tanoshiHeaderModel={contactHeaderModel} />
        <TanoshiContainer tanoshiContainerModel={contactParagraphsContainer} customClasses={'no-padding'}>   
            <TanoshiParagraph tanoshiParagraphModel={contactParagraphModel} />
            <TanoshiLinkAsButton tanoshiLinkModel={contactLinkAsButton} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<style>

    @media (min-width: 768px) {
        section{
            padding: 2rem;
        }
    }
    p.sub-header > span {
        font-weight: bold;
    }


</style>