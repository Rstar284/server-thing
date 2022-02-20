<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
	</div>

        <nav> 
            <ul> 
                    <li class:active={$page.url.pathname === '/'}>
                        <a sveltekit:prefetch href="/">Home</a>
                    </li>
                    <li class:active="{$page.url.pathname.startsWith('/fun')}">
			    <a sveltekit:prefetch href="/fun">Fun</a>
		    </li>
		    <li class:active="{$page.url.pathname.startsWith("/rand")}">
			    <a sveltekit:prefetch href="/rand">Rand</a>
		    </li>
		</ul>	
	</nav>

	<div class="corner">
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	nav {
		display: flex;
		justify-content: center;
                --background: rgba(61, 61, 61, 0.7); 
                padding-top: 0.5rem;
	}

	ul {
		position: relative;
                padding: 0;
		margin: 0;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
                background-size: contain;
                border-radius: 1.5rem;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 0.35rem;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
                transition: color 0.2s linear; 
	}

	a:hover {
		color: var(--accent-color);
        }
</style>
