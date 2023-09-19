<script lang="ts">
	import { SIZES, THEMES, TanoshiLink, TanoshiLinkModel, TanoshiNavigation, TanoshiNavigationModel } from 'tanoshi';
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
        {
			link: devsLink,
			component: TanoshiLink
		},
		{
			link: coursesLink,
			component: TanoshiLink
		},
	];

    const desktopNavbarRightItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: resumeLink,
			component: TanoshiLink
		},
		{
			link: contactLink,
			component: TanoshiLink
		}
	];

    const mobileNavbarTopItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: logoLink,
			component: TanoshiLink
		}
	];


    const mobileNavbarCenterItemModels: Array<TanoshiNavigationLinkModel> = [
        {
			link: devsLink,
			component: TanoshiLink
		},
		{
			link: coursesLink,
			component: TanoshiLink
		},
        {
			link: resumeLink,
			component: TanoshiLink
		},
		{
			link: contactLink,
			component: TanoshiLink
		}
	];


    const tanoshiDesktopNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsAtLeft(desktopNavbarLeftItemModels)
        .setItemsAtRight(desktopNavbarRightItemModels);

    const tanoshiMobileNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsAtLeft(mobileNavbarTopItemModels)
        .setItemsAtCenter(mobileNavbarCenterItemModels);
    

</script>


<TanoshiNavigation tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel}  tanoshiMobileNavigationModel={tanoshiMobileNavigationModel} />
<main>
	<slot />
</main>

<style>
    @media (min-width: 768px) {
        main {
            padding-top: 96px;
        }
    }
</style>