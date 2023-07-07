<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="relative">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="vrish-logo.png" class="mr-3 h-8 sm:h-9" alt="Vrish Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Vrish || Rishi Khiroya
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/photography">Photography</NavLi>
			<NavLi href="/music">Music</NavLi>
			<NavLi href="/coding">Coding</NavLi>
			<!-- <NavLi href="/about">About Me</NavLi> -->
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
		<DarkMode />
	</Navbar>
</div>

<slot />
