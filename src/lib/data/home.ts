import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Abdelkhalek';

export const lastName = 'BOUKRI';

export const description =
	'I am a skilled software developer specializing in .NET and Flutter. With a passion for creating efficient and user-friendly applications, I have experience in developing robust back-end systems and engaging mobile apps. My expertise includes working with modern frameworks and technologies to deliver high-quality solutions tailored to meet client needs.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Boukri' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/abdel-khalek-boukri/'
	},
	{
		platform: Platform.Email,
		link: 'boukri.a.khalek@gmail.com'
	},
];

export const skills = getSkills('csharp', 'css', 'html', 'js', 'flutter');
