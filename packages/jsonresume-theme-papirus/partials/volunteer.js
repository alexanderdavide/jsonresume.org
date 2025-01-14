export default `{{#if resume.volunteer.length}}
<section class="section-volunteer">
	{{>title title='Volunteer'}}
	{{#each resume.volunteer}}
	<div class="item">
		{{#if position}}
		<div class="position">
			{{position}}
		</div>
		{{/if}}
		{{#if organization}}
		<div class="company">
			<span class="name">
				{{organization}}
			</span>
			{{#if website}}
			<span class="website">
				| {{website}}
			</span>
		{{/if}}
		{{/if}}
		<span class="date">
			{{#if startDate}}
			| <span class="startDate">
				{{formatDate startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				- {{formatDate endDate}}
			</span>
			{{else}}
			<span class="endDate">
				- Present
			</span>
			{{/if}}
			{{#if startDate}}
			{{#if endDate}}
			<span class="diffDate">
				({{dateDiff startDate endDate}})
			</span>
			{{/if}}
			{{/if}}
		</span>
		</div>
		{{#if summary}}
		<div class="summary">
			<p>{{summary}}</p>
		</div>
		{{/if}}
		{{#if highlights.length}}
		<ul class="highlights">
			{{#each highlights}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
	</div>
	{{/each}}
</section>
{{/if}}`;
