<script lang="ts">
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, SIZES, TEXT_ALIGNMENT, THEMES, TanoshiContainer, TanoshiContainerModel, TanoshiLink, TanoshiLinkModel, TanoshiNavigation, TanoshiNavigationModel, TanoshiParagraph, TanoshiParagraphModel } from 'tanoshi';
    import "@fontsource-variable/oswald";
    import "@fontsource/anton";
    import './app.css';
	import type { TanoshiNavigationLinkModel } from 'tanoshi/dist/types/Types';


    const devsLink: TanoshiLinkModel = new TanoshiLinkModel('Développeur web')
        .setLink('/website-creation')
        .setTheme(THEMES.Primary)
        .setDisplaySize(SIZES.Lg);
    const coursesLink: TanoshiLinkModel = new TanoshiLinkModel('Formations')
        .setLink('/courses')
        .setTheme(THEMES.Primary)
        .setDisplaySize(SIZES.Lg);
    const logoLink: TanoshiLinkModel = new TanoshiLinkModel('LETSJAM')
        .setLink('/')
        .setTheme(THEMES.Primary)
        .setDisplaySize(SIZES['2Xl']);
    const resumeLink: TanoshiLinkModel = new TanoshiLinkModel('CV')
        .setLink('/resume')
        .setTheme(THEMES.Primary)
        .setDisplaySize(SIZES.Lg);
    const contactLink: TanoshiLinkModel = new TanoshiLinkModel('Me contacter')
        .setLink('/contact')
        .setTheme(THEMES.Primary)
        .setDisplaySize(SIZES.Lg);
   
    const desktopNavbarLeftItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: logoLink,
			component: TanoshiLink
		},
	];

    const desktopNavbarRightItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: contactLink,
			component: TanoshiLink
		},
	];

    const mobileNavbarTopItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: logoLink,
			component: TanoshiLink
		},
        {
			link: contactLink,
			component: TanoshiLink
		},
	];


    const mobileNavbarCenterItemModels: Array<TanoshiNavigationLinkModel> = [

	];


    const tanoshiDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsAtLeft(desktopNavbarLeftItemModels)
        .setItemsAtRight(desktopNavbarRightItemModels);

    const tanoshiMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsAtLeft(mobileNavbarTopItemModels)
        .setItemsAtCenter(mobileNavbarCenterItemModels);

    const tanoshiFooterContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Black)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const footerParagraph: TanoshiParagraphModel = new TanoshiParagraphModel("© 2023 LETSJAM")
        .setTheme(THEMES.White)
        .setAlignment(TEXT_ALIGNMENT.Center)
    

</script>


<TanoshiNavigation tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel}  tanoshiMobileNavigationModel={tanoshiMobileNavigationModel} />
<main>
	<slot />
</main>

<footer>
    <TanoshiContainer tanoshiContainerModel={tanoshiFooterContainerModel}>
        <TanoshiParagraph tanoshiParagraphModel={footerParagraph} />
    </TanoshiContainer>
</footer>
<style>
    @media (min-width: 768px) {
        main {
            padding-top: 96px;
        }
    }
</style>