export default `{{#if resume.education.length}}
<section class="section-education">
	{{>title title='Education'}}
	{{#each resume.education}}
	<div class="item">
		<div class="studyTitle">
			{{#if studyType}}
			<span class="studyType">
				{{studyType}}
			</span>
			{{/if}}
			{{#if area}}
			<span class="area">
				{{area}}
			</span>
			{{/if}}
			{{#if gpa}}
			<span class="gpa">
				<span class="badge"> {{gpa}} </span>
			</span>
			{{/if}}
		</div>
		{{#if courses.length}}
		<ul class="courses">
			{{#each courses}}
			<li>{{.}}</li>
			{{/each}}
		</ul>
		{{/if}}
		{{#if institution}}
		<div class="institution">
			{{institution}}
		</div>
		{{/if}}
		<div class="date">
			{{#if startDate}}
			<span class="startDate">
				{{formatDateYear startDate}}
			</span>
			{{/if}}
			{{#if endDate}}
			<span class="endDate">
				- {{formatDateYear endDate}}
			</span>
			{{else}}
			<span class="endDate">
				- Present
			</span>
			{{/if}}
		</div>
	</div>
	{{/each}}
</section>
{{/if}}`;
