import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'mobile-junior',
		company: 'BROKER Marketing',
		description: 'In the pharmaceutical field, I have significant experience in the startup phase, where I played a key role in developing a startup app and several applications specifically designed for pharmaceutical laboratories. My work involved creating innovative solutions to address industry needs and streamline laboratory operations. I designed and launched a startup app that aimed to enhance various aspects of pharmaceutical processes, providing a foundational tool for industry professionals. Additionally, I developed multiple applications tailored to the unique requirements of pharmaceutical laboratories, focusing on improving efficiency, data management, and overall workflow. These projects required a deep understanding of the pharmaceutical sector and a commitment to delivering high-quality, user-centric solutions that support both operational excellence and business growth.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2019, 10, 2), to: new Date(2022,3,5) },
		skills: getSkills('flutter', 'dart'),
		name: 'Junior Mobile Developer',
		color: 'green',
		links: [],
		logo: Assets.Broker_ph,
		shortDescription: 'Creating startup mobile app.'
	}
	,
	{
		slug: 'freelance',
		company: 'Self-employed',
		description: 'Starting new challenges in desktop management solutions, I create tailored software for local customers, including food stores, retail shops, schools, and medical clinics. My focus is on developing robust, user-friendly solutions that streamline operations, manage inventory, and enhance overall efficiency. For food stores and retail shops, I design systems that handle sales, inventory management, and customer interactions seamlessly. For schools, my solutions efficiently manage supplies, student transactions, and administrative tasks. In medical clinics, I provide software that integrates appointment scheduling, patient records, and billing functions into a cohesive system. Each solution is customized to meet the specific needs of the sector, ensuring improved productivity and operational effectiveness.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022,3,5), to:new Date(2022,6,2) },
		skills: getSkills('wpf', 'csharp'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.WPF,
		shortDescription: 'Creating descktop point of sale applications for local customers.'
	},
	{
		slug: 'mide-developer',
		company: 'Intelifox',
		description: 'As an ASP.NET Core developer with a focus on ERP systems, I have extensive experience designing and implementing comprehensive enterprise resource planning solutions. My expertise lies in creating scalable and efficient web applications that integrate various business processes, such as inventory management, order processing, financial reporting, and customer relationship management. In addition to my ASP.NET Core experience, I have also gained valuable skills in Flutter from previous roles. This experience has enabled me to develop cross-platform mobile applications that complement my web-based ERP solutions. I leverage Flutter to build responsive, high-performance mobile apps that enhance user engagement and provide seamless access to ERP functionalities on both iOS and Android devices. My approach combines robust backend development with cutting-edge mobile technology, ensuring that businesses benefit from integrated, user-friendly solutions that drive operational efficiency and support strategic decision-making.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022,6,2) , to: new Date()},
		skills: getSkills('csharp', 'dotnet'),
		name: 'Software Developer',
		color: 'red',
		links: [],
		logo: Assets.Intelifox_logo,
		shortDescription: "Creating backend services, API's and Mobile applications."
	}
	
];

export const title = 'Experience';
