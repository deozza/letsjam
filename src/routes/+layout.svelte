<script lang="ts">
	import { TanoshiLinkModel, TanoshiNavigation, TanoshiNavigationModel } from 'tanoshi';
    import './app.css';

    const devsLink: TanoshiLinkModel = new TanoshiLinkModel('Développeur web').setLink('/website-creation').setTheme('primary').setDisplaySize('lg');
    const coursesLink: TanoshiLinkModel = new TanoshiLinkModel('Formations').setLink('/courses').setTheme('primary').setDisplaySize('lg');
    const logoLink: TanoshiLinkModel = new TanoshiLinkModel('LETSJAM').setLink('/').setTheme('primary').setDisplaySize('2xl');
    const resumeLink: TanoshiLinkModel = new TanoshiLinkModel('CV').setLink('/resume').setTheme('primary').setDisplaySize('lg');
    const contactLink: TanoshiLinkModel = new TanoshiLinkModel('Me contacter').setLink('/contact').setTheme('primary').setDisplaySize('lg');
   
    const navigationLinksCenter: Array<TanoshiLinkModel> = [
        devsLink,
        logoLink,
        coursesLink
    ];

    const navigationLinksRight: Array<TanoshiLinkModel> = [
        resumeLink,
        contactLink
    ];

    const tanoshiNavigationModel: TanoshiNavigationModel = new TanoshiNavigationModel()
    .setTheme('dark')
    .setItemsAtCenter(navigationLinksCenter)
    .setItemsAtRight(navigationLinksRight);
</script>

<div>
    <TanoshiNavigation {tanoshiNavigationModel} />
    <main class="relative">
        <slot />
    </main>
</div>