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
   
    const navbarCenterItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: devsLink,
			component: TanoshiLink
		},
		{
			link: logoLink,
			component: TanoshiLink
		},
		{
			link: coursesLink,
			component: TanoshiLink
		},
	];

    const navbarRightItemModels: Array<TanoshiNavigationLinkModel> = [
		{
			link: resumeLink,
			component: TanoshiLink
		},
		{
			link: contactLink,
			component: TanoshiLink
		}
	];


    const tanoshiNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
        .setTheme(THEMES.Black)
        .setItemsAtCenter(navbarCenterItemModels)
        .setItemsAtRight(navbarRightItemModels);

</script>

<div>
    <TanoshiNavigation tanoshiDesktopNavigationModel={tanoshiNavigationModel}  tanoshiMobileNavigationModel={tanoshiNavigationModel} />
    <main class="relative">
        <slot />
    </main>
</div>