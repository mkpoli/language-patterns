<script lang="ts">
	import './toc.css';
	import { createToc } from '$lib/toc.svelte';
	import RailToc from './RailToc.svelte';
	import PillToc from './PillToc.svelte';

	// One controller, two presentations: the rail claims the margin where there
	// is one, the pill floats where there is not. CSS decides which is visible.
	const toc = createToc(() => document.querySelector('main article'));
</script>

<RailToc {toc} />
<PillToc {toc} />
