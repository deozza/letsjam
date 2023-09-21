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
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)

    const aboutHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('A propos de moi')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);

    const aboutParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("Développeur web freelance expérimenté avec plus de 5 ans d'expérience dans la création et la maintenance de sites pour des startups et des grands groupes. Je me spécialise aujourd'hui dans la création de sites vitrines pour les artisans de la musique.")
        .setSize(SIZES.Xl)

    const aboutParagraph2Model: TanoshiParagraphModel = new TanoshiParagraphModel("Maitrisant les technologies modernes du web, je vous accompagne pour concevoir des solutions durables, adaptées à tous les supports et accessibles pour tous les utilisateurs.")
        .setSize(SIZES.Xl)

    const aboutContentHalfRightContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const emptyBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)

    const servicesContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
    
    const servicesContentLeftContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)

    const servicesContentHeaderContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const servicesDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Développement')
        .setSize(SIZES["4Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black);

    const serviceHalfLeftContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setWidth(WIDTHS.W6)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setHeight(HEIGHTS.HAUTO)

    const serviceHalfRightContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setWidth(WIDTHS.W6)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHeight(HEIGHTS.HAUTO)

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

    const upgradeDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Amélioration de votre site')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)

    const upgradeDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Vous avez déjà un site et vous souhaitez lui rajouter des fonctionnalités, améliorer ses performances ou moderniser son look.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)

    const fulldevDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Création complète")
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)

    const fulldevDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Conception et création complète de votre site pour mettre en avant votre marque et vos produits.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)

    const servicesContentLeftButtonContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const devKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Black)
        .setSize(BUTTON_SIZES.Lg)
    const devKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/contact')
    const devKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(devKnowMoreLink, devKnowMoreButton)

    const servicesContentRightContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Black)
        .setWidth(WIDTHS.W6)
        .setHeight(HEIGHTS.MINH100VH)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
   
    const servicesFormationsHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formations')
        .setSize(SIZES["4Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);

    const backendFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formation backend')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.White)

    const backendFormationParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formations sur le langage PHP, le framework Symfony, les bases de données MySQL, aux API.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.White)

    const frontendFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formation frontend')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.White)

    const frontendFormationParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formation au HTML/CSS, à JS, aux framework Sveltekit et NuxtJS, à Firebase, au SEO.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.White)

    const toolsFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Formation aux outils et techniques")
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H4)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.White)

    const toolsParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formation à la refactorisation, aux tests, à Docker, à la CI/CD.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.White)

    const formationKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Primary)
        .setTextTheme(THEMES.Black)
        .setSize(BUTTON_SIZES.Lg)
    const formationKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/contact')
    const formationKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(formationKnowMoreLink, formationKnowMoreButton)

    const contactButton: TanoshiButtonModel = new TanoshiButtonModel('Me contacter')
        .setBasicTheme(THEMES.Black)
        .setSize(BUTTON_SIZES.Lg)

    const contactLink: TanoshiLinkModel = new TanoshiLinkModel('Contacter')
        .setLink('/contact')
    const contactLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(contactLink, contactButton)

    const trustedByHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel("Ils m'ont fait confiance")
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center);
    
    const trustedByContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setWidth(WIDTHS.W12)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
    
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
            image: new TanoshiLinkAsImageModel(new TanoshiLinkModel("EEMI").setLink("https://www.eemi.com/"), new TanoshiImageModel("/images/eemi.jpg", "eemi"))
        },
    ]

    const contactBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)

    const contactContentContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
    
    const contactHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel('Une question ? Contactez-moi !')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center);
    
    const contactParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("Une question sur votre projet ? Un site à auditer ? Un cours à animer ? N'hésitez pas à me contacter pour en discuter.")
        .setAlignment(TEXT_ALIGNMENT.Center)
        .setSize(SIZES.Lg)
        .setHasSpacing(false);

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
    <TanoshiContainer tanoshiContainerModel={aboutBackgroundContainer} customClasses={'no-padding'}>
        <TanoshiContainer tanoshiContainerModel={aboutContentHalfLeftContainer}>
            <TanoshiHeader tanoshiHeaderModel={aboutHeaderModel} />
            <TanoshiParagraph tanoshiParagraphModel={aboutParagraphModel} />
            <TanoshiParagraph tanoshiParagraphModel={aboutParagraph2Model} />
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={aboutContentHalfRightContainer} customClasses={'about-bg-image'}>
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="services">
    <TanoshiContainer tanoshiContainerModel={servicesContentContainer} customClasses={'no-padding'}>
        <TanoshiContainer tanoshiContainerModel={servicesContentLeftContainer}>
            <TanoshiContainer tanoshiContainerModel={servicesContentHeaderContainer}>
                <TanoshiHeader tanoshiHeaderModel={servicesDevelopmentHeader} />
            </TanoshiContainer>
            
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={auditDevelopmentHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={auditDevelopmentParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel}>
                    <iconify-icon icon="fontisto:zoom" color="#000" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>

            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={upgradeDevelopmentHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={upgradeDevelopmentParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel}>
                    <iconify-icon icon="mdi:creation" color="#000" height="100" width="100"></iconify-icon>

                </TanoshiContainer>
            </TanoshiContainer>
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={fulldevDevelopmentHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={fulldevDevelopmentParagraph} />

                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel}>
                    <iconify-icon icon="fluent-mdl2:edit-create" color="#000" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>

            <TanoshiContainer tanoshiContainerModel={servicesContentLeftButtonContainer}>
                <TanoshiLinkAsButton tanoshiLinkModel={devKnowMoreLinkAsButton} />
            </TanoshiContainer>
        </TanoshiContainer>
        <TanoshiContainer tanoshiContainerModel={servicesContentRightContainer}>
            <TanoshiContainer tanoshiContainerModel={servicesContentHeaderContainer}>
                <TanoshiHeader tanoshiHeaderModel={servicesFormationsHeader} />
            </TanoshiContainer>
            
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={backendFormationHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={backendFormationParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel}>
                    <iconify-icon icon="mdi:server" style="color: #fff" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>

            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={frontendFormationHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={frontendFormationParagraph} />
                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel}>
                    <iconify-icon icon="mdi:language-html5" style="color: #fff" height="100" width="100"></iconify-icon>

                </TanoshiContainer>
            </TanoshiContainer>
            <TanoshiContainer tanoshiContainerModel={serviceItemContainer}>
                <TanoshiContainer tanoshiContainerModel={serviceHalfLeftContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={toolsFormationHeader} />
                    <TanoshiParagraph tanoshiParagraphModel={toolsParagraph} />

                </TanoshiContainer>
                <TanoshiContainer tanoshiContainerModel={serviceHalfRightContainerModel}>
                    <iconify-icon icon="fa:gears" style="color: #fff" height="100" width="100"></iconify-icon>
                </TanoshiContainer>
            </TanoshiContainer>            
            <TanoshiLinkAsButton tanoshiLinkModel={formationKnowMoreLinkAsButton} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>

<section id="trustedBy">
    <TanoshiContainer tanoshiContainerModel={emptyBackgroundContainer}>
        <TanoshiHeader tanoshiHeaderModel={trustedByHeaderModel} />
    </TanoshiContainer>

    <TanoshiContainer tanoshiContainerModel={trustedByContentContainer}>
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
    <TanoshiContainer tanoshiContainerModel={emptyBackgroundContainer}>        
        <TanoshiHeader tanoshiHeaderModel={contactHeaderModel} />
    </TanoshiContainer>

    <TanoshiContainer tanoshiContainerModel={contactBackgroundContainer}>        
        <TanoshiContainer tanoshiContainerModel={contactContentContainer}>
            <TanoshiParagraph tanoshiParagraphModel={contactParagraphModel} />
            <TanoshiLinkAsButton tanoshiLinkModel={contactLinkAsButton} />
        </TanoshiContainer>
    </TanoshiContainer>
</section>