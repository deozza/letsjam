<script lang="ts">
	import { 
        TanoshiContainerModel,
        CONTAINER_ORIENTATIONS,
        THEMES,
        CONTAINER_ITEMS_SPACING,
        CONTAINER_ITEMS_ALIGNMENTS, 
        TanoshiHeaderModel, 
        HEADER_TAGS, 
        SIZES,
        TanoshiHeader,
        TanoshiLinkModel,
        TanoshiLink,
        TanoshiContainerMaterial 
    } from 'tanoshi';

    const tanoshiContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const tanoshiHeaderModel: TanoshiHeaderModel = new TanoshiHeaderModel("Cette page n'existe pas")
        .setTheme(THEMES.Primary)
        .setTag(HEADER_TAGS.H1)
        .setSize(SIZES["6Xl"])

    const tanoshiLinkModel: TanoshiLinkModel = new TanoshiLinkModel("Revenir à la page d'accueil")
        .setTheme(THEMES.White)
        .setLink("/")
        .setDisplaySize(SIZES["2Xl"])
        .setIconAtRight('mdi:arrow-right')
</script>
  
<svelte:head>
  <title>Letsjam - Cette page n'existe pas !</title>
  <meta name="description" content="Développeur web freelance spécialisé dans la création, l'hébergement et la maintenance de sites webs pour les artisans de la musique" />
</svelte:head>

<section id="hero">

    <TanoshiContainerMaterial {tanoshiContainerModel}>
        <TanoshiHeader {tanoshiHeaderModel} />
        <TanoshiLink {tanoshiLinkModel} />
    </TanoshiContainerMaterial>
</section>