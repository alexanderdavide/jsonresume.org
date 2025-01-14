export default `{{#if resume.publications.length}}
<section class="section-publications">
	{{>title title='Publications'}}
	{{#each resume.publications}}
	<div class="item">
		{{#if name}}
		<div class="name">
			{{name}}
		</div>
		{{/if}}

		<div class="publication">
			{{#if publisher}}
			<span class="publisher">
				{{publisher}}
			</span>
			{{/if}}
			{{#if website}}
			<span class="website">
				| {{website}}
			</span>
			{{/if}}
			{{#if releaseDate}}
			<span class="releaseDate">
				| {{releaseDate}}
			</span>
			{{/if}}
		</div>

		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`;
