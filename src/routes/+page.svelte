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
        TanoshiContainerMaterial, 
        TanoshiContainerModel, 
        TanoshiHeader, 
        TanoshiHeaderModel,
        TanoshiLinkModel, 
        TanoshiParagraph, 
        TanoshiParagraphModel,
		TanoshiLinkAsButtonModel,
		TanoshiLinkAsButton,
		TanoshiImageModel,
		BUTTON_SIZES,
		TanoshiImage,
		TanoshiContainerNeumorphism,
		CONTAINER_BORDERS,
		TanoshiButtonNeumorphism,
        } from "tanoshi";

   
    const heroRowContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setMobileOrientation(CONTAINER_ORIENTATIONS.CReverse)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.MinW12)
        .setHeight(HEIGHTS.MINH75VH)
        .setBackgroundTheme(THEMES.Primary)

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
        .setTheme(THEMES.White)

    const aboutParagraph2Model: TanoshiParagraphModel = new TanoshiParagraphModel("Maitrisant les technologies modernes du web, je vous accompagne pour concevoir des solutions durables, adaptées à tous les supports et accessibles pour tous les utilisateurs.")
        .setSize(SIZES.Xl)
        .setAlignment(TEXT_ALIGNMENT.Justify)
        .setTheme(THEMES.White)

    const aboutCourseParagraphModel: TanoshiParagraphModel = new TanoshiParagraphModel("La transmission de ces connaissances et de ce savoir-faire est importante pour moi. J'anime des interventions et des cours dans des écoles du digital pour les partager avec la nouvelle génération de développeurs et développeuses.")
        .setSize(SIZES.Xl)
        .setAlignment(TEXT_ALIGNMENT.Justify)
        .setTheme(THEMES.White)

    const aboutImageContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHeight(HEIGHTS.MINH75VH)

    const serviceItemHeaderContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const serviceDevRowContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setBackgroundTheme(THEMES.Black)
        .setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHasPadding(false)
        .setHeight(HEIGHTS.MINH75VH)

    const servicesDevContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setMobileOrientation(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W12)
        .setHasPadding(false)

    const servicesDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Développement')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Primary);

    const serviceDevItemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W3)
        .setMobileWidth(WIDTHS.W10)
        .setBackgroundTheme(THEMES.Black)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setBorderTheme(THEMES.Black)

    const auditDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Audit de votre site')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H3)
        .setTheme(THEMES.White)

    const auditDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Analyse de votre site pour en déterminer les points forts et les points faibles. Je vous propose ensuite des solutions pour améliorer votre site et le rendre plus performant.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setAlignment(TEXT_ALIGNMENT.Justify)
        .setTheme(THEMES.White)

    const upgradeDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Amélioration de votre site')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H3)
        .setTheme(THEMES.White)

    const upgradeDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Vous avez déjà un site et vous souhaitez lui rajouter des fonctionnalités, améliorer ses performances ou moderniser son look.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setAlignment(TEXT_ALIGNMENT.Justify)
        .setTheme(THEMES.White)

    const fulldevDevelopmentHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Création complète")
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H3)
        .setTheme(THEMES.White)

    const fulldevDevelopmentParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Conception et création complète de votre site pour mettre en avant votre marque et vos produits.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setAlignment(TEXT_ALIGNMENT.Justify)
        .setTheme(THEMES.White)

    const devKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setBasicTheme(THEMES.Black)
        .setTextTheme(THEMES.Primary)
        .setTextHoverTheme(THEMES.Primary)
        .setSize(BUTTON_SIZES.Lg)
        .setShape(CONTAINER_BORDERS.Full)

    const devKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('dev')
        .setLink('/contact')
    const devKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(devKnowMoreLink, devKnowMoreButton).setTanoshiButtonComponent(TanoshiButtonNeumorphism)

    const serviceFormationRowContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setBackgroundTheme(THEMES.White)
        .setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHasPadding(false)
        .setHeight(HEIGHTS.MINH75VH)

    const servicesFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formations')
        .setSize(SIZES["6Xl"])
        .setTag(HEADER_TAGS.H2)
        .setAligment(TEXT_ALIGNMENT.Center)
        .setTheme(THEMES.Black)

    const serviceFormationItemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setWidth(WIDTHS.W3)
        .setMobileWidth(WIDTHS.W10)
        .setBackgroundTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Md)
        .setBorderTheme(THEMES.White)

    const backendFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formation backend')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.Black)

    const backendFormationParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formations sur le langage PHP, le framework Symfony, les bases de données MySQL, aux API.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.Black)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const frontendFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel('Formation frontend')
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.Black)

    const frontendFormationParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formation au HTML/CSS, à JS, aux framework Sveltekit et NuxtJS, à Firebase, au SEO.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.Black)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const toolsFormationHeader: TanoshiHeaderModel = new TanoshiHeaderModel("Outils et techniques")
        .setSize(SIZES["2Xl"])
        .setTag(HEADER_TAGS.H3)
        .setAligment(TEXT_ALIGNMENT.Left)
        .setTheme(THEMES.Black)

    const toolsParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("Formation à la refactorisation, aux tests, à Docker, à la CI/CD.")
        .setSize(SIZES.Lg)
        .setHasSpacing(false)
        .setTheme(THEMES.Black)
        .setAlignment(TEXT_ALIGNMENT.Justify)

    const formationKnowMoreButton: TanoshiButtonModel = new TanoshiButtonModel('En savoir plus')
        .setSize(BUTTON_SIZES.Lg)
        .setBasicTheme(THEMES.White)
        .setTextTheme(THEMES.Primary)
        .setTextHoverTheme(THEMES.Primary)
        .setSize(BUTTON_SIZES.Lg)
        .setShape(CONTAINER_BORDERS.Full)

    const formationKnowMoreLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/contact')
    const formationKnowMoreLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(formationKnowMoreLink, formationKnowMoreButton).setTanoshiButtonComponent(TanoshiButtonNeumorphism)

    const contactColumnContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHeight(HEIGHTS.MINH33VH)
        
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
        .setHasPadding(false)
    
    const contactParagraphModel : TanoshiParagraphModel = new TanoshiParagraphModel("Une question sur votre projet ? Un site à auditer ? Un cours à animer ? N'hésitez pas à me contacter pour en discuter.")
        .setAlignment(TEXT_ALIGNMENT.Center)
        .setSize(SIZES.Lg)
        .setHasSpacing(false);

    const contactButton: TanoshiButtonModel = new TanoshiButtonModel('Me contacter')
        .setSize(BUTTON_SIZES.Lg)
        .setBasicTheme(THEMES.Primary)
        .setTextTheme(THEMES.Black)
        .setTextHoverTheme(THEMES.Black)
        .setSize(BUTTON_SIZES.Lg)
        .setShape(CONTAINER_BORDERS.Full)

    const contactLink: TanoshiLinkModel = new TanoshiLinkModel('Contacter')
        .setLink('/contact')
    const contactLinkAsButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(contactLink, contactButton).setTanoshiButtonComponent(TanoshiButtonNeumorphism)

</script>

<svelte:head>
  <title>Letsjam - composons votre site web !</title>
  <meta name="description" content="Développeur web freelance spécialisé dans la création, l'hébergement et la maintenance de sites webs pour les artisans de la musique" />
</svelte:head>

<section id="hero">
   <TanoshiContainerMaterial tanoshiContainerModel={heroRowContainer}>
        <TanoshiContainerMaterial tanoshiContainerModel={heroLeftContainer}>
            <TanoshiHeader tanoshiHeaderModel={heroHeader} />
            <p class="sub-header text-2xl h-black text-left">Audit, conception, développement, hébergement, maintenance pour les <span class="text-3xl">artisans de la musique</span></p>
        </TanoshiContainerMaterial>
        <TanoshiContainerMaterial tanoshiContainerModel={heroRightContainer}>
            <TanoshiImage tanoshiImageModel={heroImage} />
        </TanoshiContainerMaterial>
    </TanoshiContainerMaterial>
</section>

<section id="about">
    <TanoshiContainerMaterial tanoshiContainerModel={aboutImageContainer} customClasses={'about-bg-image'}>
        <TanoshiContainerMaterial tanoshiContainerModel={aboutParagraphsContainer}>
            <TanoshiHeader tanoshiHeaderModel={aboutHeaderModel} />

            <TanoshiParagraph tanoshiParagraphModel={aboutParagraphModel} />
            <TanoshiParagraph tanoshiParagraphModel={aboutParagraph2Model} />
            <TanoshiParagraph tanoshiParagraphModel={aboutCourseParagraphModel} />
        </TanoshiContainerMaterial>
    </TanoshiContainerMaterial>    
</section>

<section id="services-dev">
    
    <TanoshiContainerMaterial tanoshiContainerModel={serviceDevRowContainerModel} >
        <TanoshiHeader tanoshiHeaderModel={servicesDevelopmentHeader} />

        <TanoshiContainerMaterial tanoshiContainerModel={servicesDevContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={serviceDevItemContainer} customClasses={'margin-y-4'}>
                <TanoshiContainerMaterial tanoshiContainerModel={serviceItemHeaderContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={auditDevelopmentHeader} />
                    <iconify-icon icon="fontisto:zoom" style="color: #fff;" height="40" width="40"></iconify-icon>
                </TanoshiContainerMaterial>
                <TanoshiParagraph tanoshiParagraphModel={auditDevelopmentParagraph} />
            </TanoshiContainerNeumorphism>

            <TanoshiContainerNeumorphism tanoshiContainerModel={serviceDevItemContainer} customClasses={'margin-y-4'}>
                <TanoshiContainerMaterial tanoshiContainerModel={serviceItemHeaderContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={upgradeDevelopmentHeader} />
                    <iconify-icon icon="mdi:creation" style="color: #fff;" height="50" width="50"></iconify-icon>
                </TanoshiContainerMaterial>
                <TanoshiParagraph tanoshiParagraphModel={upgradeDevelopmentParagraph} />
            </TanoshiContainerNeumorphism>

            <TanoshiContainerNeumorphism tanoshiContainerModel={serviceDevItemContainer} customClasses={'margin-y-4'}>
                <TanoshiContainerMaterial tanoshiContainerModel={serviceItemHeaderContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={fulldevDevelopmentHeader} />
                    <iconify-icon icon="fluent-mdl2:edit-create" style="color: #fff;" height="50" width="50"></iconify-icon>
                </TanoshiContainerMaterial>
                <TanoshiParagraph tanoshiParagraphModel={fulldevDevelopmentParagraph} />
            </TanoshiContainerNeumorphism>

        </TanoshiContainerMaterial>
        <TanoshiLinkAsButton tanoshiLinkModel={devKnowMoreLinkAsButton} />
    </TanoshiContainerMaterial>
</section>

<section id="services-formation">

    <TanoshiContainerMaterial tanoshiContainerModel={serviceFormationRowContainerModel} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3c3b3b" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,218.7C384,235,480,181,576,144C672,107,768,85,864,96C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>        
        <TanoshiHeader tanoshiHeaderModel={servicesFormationHeader} />
        <TanoshiContainerMaterial tanoshiContainerModel={servicesDevContainer} >

            <TanoshiContainerNeumorphism tanoshiContainerModel={serviceFormationItemContainer} customClasses={'margin-y-4'}>
                <TanoshiContainerMaterial tanoshiContainerModel={serviceItemHeaderContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={backendFormationHeader} />
                    <iconify-icon icon="mdi:server" height="50" width="50"></iconify-icon>
                </TanoshiContainerMaterial>
                <TanoshiParagraph tanoshiParagraphModel={backendFormationParagraph} />
            </TanoshiContainerNeumorphism>

            <TanoshiContainerNeumorphism tanoshiContainerModel={serviceFormationItemContainer} customClasses={'margin-y-4'}>
                <TanoshiContainerMaterial tanoshiContainerModel={serviceItemHeaderContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={frontendFormationHeader} />
                    <iconify-icon icon="mdi:language-html5" height="50" width="50"></iconify-icon>
                </TanoshiContainerMaterial>
                <TanoshiParagraph tanoshiParagraphModel={frontendFormationParagraph} />
            </TanoshiContainerNeumorphism>

            <TanoshiContainerNeumorphism tanoshiContainerModel={serviceFormationItemContainer} customClasses={'margin-y-4'}>
                <TanoshiContainerMaterial tanoshiContainerModel={serviceItemHeaderContainerModel}>
                    <TanoshiHeader tanoshiHeaderModel={toolsFormationHeader} />
                    <iconify-icon icon="fa:gears" height="50" width="50"></iconify-icon>
                </TanoshiContainerMaterial>
                <TanoshiParagraph tanoshiParagraphModel={toolsParagraph} />
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
        <TanoshiLinkAsButton tanoshiLinkModel={formationKnowMoreLinkAsButton} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D97734" fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,165.3C384,139,480,85,576,85.3C672,85,768,139,864,144C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>   
     </TanoshiContainerMaterial>

</section>

<section id="contact">

    <TanoshiContainerMaterial tanoshiContainerModel={contactColumnContainer}>

        <TanoshiHeader tanoshiHeaderModel={contactHeaderModel} />
        <TanoshiContainerMaterial tanoshiContainerModel={contactParagraphsContainer} >   
            <TanoshiParagraph tanoshiParagraphModel={contactParagraphModel} />
            <TanoshiLinkAsButton tanoshiLinkModel={contactLinkAsButton} />
        </TanoshiContainerMaterial>
    </TanoshiContainerMaterial>
</section>

<style>

    p.sub-header > span {
        font-weight: bold;
    }


</style>