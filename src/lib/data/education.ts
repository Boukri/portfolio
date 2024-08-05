import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BTS degree of Computer Science',
		description: '',
		location: 'Algeria',
		logo: Assets.Unknown,
		name: '',
		organization: 'Institute',
		period: { from: new Date(2015, 10, 3), to: new Date(2018, 4, 19) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['PASCAL', 'Algorithm', 'Algebra', 'SQL', 'Delphi',]
	} 
];

export const title = 'Education';
