export default `{{#if resume.basics.summary}}
	<section class="section-summary">
		{{>title title='Summary'}}
		{{resume.basics.summary}}
	</section>
{{/if}}`;
