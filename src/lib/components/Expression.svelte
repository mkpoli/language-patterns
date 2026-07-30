<script lang="ts">
	interface Props {
		/** The form as written in its own script. */
		text: string;
		/** Romanization, set apart from the form typographically. */
		transliteration?: string;
		/** Put the romanization on its own line instead of after the form. */
		stacked?: boolean;
		class?: string;
	}
	let { text, transliteration, stacked = false, class: className = '' }: Props = $props();
</script>

<span class="expr {stacked ? 'stacked' : ''} {className}">
	<span class="form">{text}</span>
	{#if transliteration}
		<span class="roman">{transliteration}</span>
	{/if}
</span>

<style>
	.expr {
		display: inline;
	}

	.form {
		font-family: var(--font-mono);
	}

	.roman {
		font-family: var(--font-sans);
		font-style: italic;
		font-size: 0.9em;
		opacity: 0.68;
	}

	/* Inline: the romanization trails the form, separated by a thin space. */
	.expr:not(.stacked) .roman::before {
		content: '\2009';
	}

	.stacked {
		display: block;
	}

	.stacked .form,
	.stacked .roman {
		display: block;
	}

	.stacked .roman {
		margin-top: 0.1em;
		line-height: 1.35;
	}
</style>
