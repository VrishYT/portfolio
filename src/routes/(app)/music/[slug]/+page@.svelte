<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Icon } from '@steeze-ui/svelte-icon';

	import { ArrowUturnLeft } from '@steeze-ui/heroicons';

	export let data;
	let { img, links } = data.project;

	const SOUNDCLOUD_LOGO = 'https://services.linkfire.com/logo_soundcloud_onlight.svg';
	const YOUTUBE_LOGO = 'https://services.linkfire.com/logo_youtube_onlight.svg';
	const SPOTIFY_LOGO = 'https://services.linkfire.com/logo_spotify_onlight.svg';
</script>

<img src={img} alt="..." class="absolute -z-10 w-screen h-screen object-cover object-center" />
<div class="w-screen h-screen bg-cover bg-center items-center">
	<div
		class="p-10 backdrop-blur-xl backdrop-brightness-75 h-screen flex items-center justify-center flex-col"
	>
		<Button pill color="dark" class="absolute z-10 top-5 left-5 flex-row flex justify-between space-x-3" href="/music">
			<Icon src={ArrowUturnLeft} size="20px" theme="solid" />
			<p class="hidden md:block">All Music</p>
		</Button>
		<div class="absolute top-10 shadow-black shadow-lg">
			<img src={img} alt="..." class="object-contain" />
			<div class="p-5 flex-col bg-neutral-950 space-y-3">
				<h1 class="text-white font-semibold text-3xl md:text-4xl text-center tracking-wider">
					DOWNLOAD/STREAM
				</h1>
				<p class="text-white text-xl md:text-2xl text-center">Choose music service:</p>
			</div>
			<div class="flex-col divide-y bg-white">
				{#if links.soundcloud}
					<a
						class="flex-row flex py-4 px-8 bg-white justify-between max-h-20"
						href={links.soundcloud}
					>
						<img src={SOUNDCLOUD_LOGO} alt="SoundCloud" class="object-contain max-w-xl max-h-20" />
						<Button class="h-15 self-center" href={links.soundcloud} pill>Play</Button>
					</a>
				{/if}
				{#if links.youtube}
					<a class="flex-row flex py-4 px-8 bg-white justify-between max-h-20" href={links.youtube}>
						<img src={YOUTUBE_LOGO} alt="YouTube" class="object-contain max-w-xl max-h-20" />
						<Button color="red" class="h-15 self-center" href={links.youtube} pill>Play</Button>
					</a>
				{/if}
				{#if links.spotify}
					<a class="flex-row flex py-4 px-8 bg-white justify-between max-h-20" href={links.spotify}>
						<img src={SPOTIFY_LOGO} alt="Spotify" class="object-contain max-w-xl max-h-20" />
						<Button color="green" class="h-15 self-center" href={links.youtube} pill>Play</Button>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
