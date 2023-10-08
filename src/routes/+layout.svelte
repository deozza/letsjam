<script lang="ts">
	import { 
	CONTAINER_BORDERS,
        CONTAINER_ITEMS_ALIGNMENTS, 
        CONTAINER_ITEMS_SPACING, 
        CONTAINER_ORIENTATIONS, 
        HEIGHTS, 
        SIZES, 
        TEXT_ALIGNMENT, 
        THEMES, 
        TanoshiButtonModel, 
        TanoshiButtonNeumorphism, 
        TanoshiContainerMaterial, 
        TanoshiContainerModel, 
        TanoshiDesktopNavigationModel, 
        TanoshiLink, 
        TanoshiLinkAsButton, 
        TanoshiLinkAsButtonModel, 
        TanoshiLinkModel, 
        TanoshiMobileNavigationModel, 
        TanoshiNavigationMaterial, 
        TanoshiParagraph, 
        TanoshiParagraphModel 
    } from 'tanoshi';
    import "@fontsource-variable/oswald";
    import '@fontsource-variable/montserrat';
    import './app.css';
	import type { TanoshiNavigationLinkModel } from 'tanoshi/dist/types/Types';

    const titleLink: TanoshiLinkModel = new TanoshiLinkModel('LETSJAM')
        .setLink('/')
        .setTheme(THEMES.Primary)
        .setDisplaySize(SIZES['2Xl']);
    const contactLink: TanoshiLinkModel = new TanoshiLinkModel('Me contacter')
        .setLink('/contact')
    const contactButton: TanoshiButtonModel = new TanoshiButtonModel('Me contacter')
        .setBasicTheme(THEMES.Black)
        .setTextTheme(THEMES.Primary)
        .setTextHoverTheme(THEMES.Primary)
        .setShape(CONTAINER_BORDERS.Full)

    const contactLinkAsAButton: TanoshiLinkAsButtonModel = new TanoshiLinkAsButtonModel(contactLink, contactButton).setTanoshiButtonComponent(TanoshiButtonNeumorphism)
   
    const desktopNavbarLeftItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: titleLink,
			component: TanoshiLink
		},
	];

    const desktopNavbarRightItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: contactLinkAsAButton,
			component: TanoshiLinkAsButton
		},
	];

    const mobileNavbarTopItemModels: Array<TanoshiNavigationLinkModel> = [
        {
            link: titleLink,
            component: TanoshiLink
        }
    ];

    const mobileNavbarItemModels: Array<TanoshiNavigationLinkModel> = [
        {
			link: contactLink,
			component: TanoshiLink
		},
	];

    const tanoshiDesktopNavigationModel: TanoshiDesktopNavigationModel = new TanoshiDesktopNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsAtLeft(desktopNavbarLeftItemModels)
        .setItemsAtRight(desktopNavbarRightItemModels)

    const tanoshiMobileNavigationModel: TanoshiMobileNavigationModel = new TanoshiMobileNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsWhenClosed(mobileNavbarTopItemModels)
        .setItemsWhenOpened(mobileNavbarItemModels)

    const tanoshiMainContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Black)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
        .setHeight(HEIGHTS.MINH100VH)
        .setHasPadding(false)

    const footerParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("© 2023 LETSJAM")
        .setTheme(THEMES.White)
        .setAlignment(TEXT_ALIGNMENT.Center)
    

</script>


<TanoshiNavigationMaterial {tanoshiDesktopNavigationModel} {tanoshiMobileNavigationModel}/>

<TanoshiContainerMaterial tanoshiContainerModel={tanoshiMainContainerModel} customClasses={'no-padding'}>
    <main>
        <slot />
    </main>
    
    <footer>
        <TanoshiParagraph tanoshiParagraphModel={footerParagraph} />
    </footer>
</TanoshiContainerMaterial>

<style>
    main{
        flex: 1;
    }
    @media (min-width: 768px) {
        main {
            padding-top: 96px;
        }
    }
    footer {
        width: 100%;
    }
</style>