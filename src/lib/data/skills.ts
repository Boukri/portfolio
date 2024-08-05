import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'csharp',
		color: 'yellow',
		description:
			'Specializing in building scalable applications using CQRS, Mediator, and Clean Architecture principles, I focus on large ERP and CRM projects. I excel in developing complex back-end systems and working with databases. My deep understanding of the .NET ecosystem allows me to deliver reliable and high-performance solutions, tailored to meet diverse client requirements and handle projects of any size.',
		logo: Assets.Csharp,
		name: 'C Sharp',
		category: 'lang'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'pink',
		description:
			"As a Flutter developer, I focus on crafting engaging and high-performance mobile applications. My expertise lies in utilizing Flutter's rich set of widgets and capabilities to create smooth, responsive user interfaces. I am skilled in integrating applications with back-end systems and delivering solutions that offer an exceptional user experience. From initial design to final deployment, I ensure that every app I build meets the highest standards of quality and functionality.",
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'framework'
	}),
	defineSkill({
		slug: 'dart',
		color: 'pink',
		description:
			"As a Flutter developer, I focus on crafting engaging and high-performance mobile applications. My expertise lies in utilizing Flutter's rich set of widgets and capabilities to create smooth, responsive user interfaces. I am skilled in integrating applications with back-end systems and delivering solutions that offer an exceptional user experience. From initial design to final deployment, I ensure that every app I build meets the highest standards of quality and functionality.",
		logo: Assets.Dart,
		name: 'Dart',
		category: 'lang'
	}),
	defineSkill({
		slug: 'wpf',
		color: 'blue',
		description:
			"Experienced in WPF development, I specialize in creating rich, interactive desktop applications with a focus on user interface design and data binding. My expertise includes leveraging WPF’s powerful features to build scalable and maintainable applications that deliver a seamless user experience.",
		logo: Assets.WPF,
		name: 'WPF',
		category: 'framework'
	}),
	defineSkill({
		slug: 'dotnet',
		color: 'perpule',
		description:
			"As an ASP.NET Core developer, I have extensive experience in designing and implementing enterprise resource planning (ERP) systems. My work involves creating scalable and efficient web applications that integrate various business processes, from inventory and order management to financial reporting and customer relationship management. I specialize in leveraging ASP.NET Core to build robust, high-performance ERP solutions that streamline operations and enhance productivity for businesses. My expertise includes developing custom modules, integrating third-party services, and optimizing applications for both performance and security. Throughout my career, I’ve successfully delivered ERP projects that address complex business needs, ensuring seamless data flow and effective management across different functional areas. My approach focuses on creating flexible and maintainable systems that drive operational efficiency and support strategic decision-making.",
		logo: Assets.NET_Core_Logo,
		name: 'ASP Net core',
		category: 'framework'
	}),
	 
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
