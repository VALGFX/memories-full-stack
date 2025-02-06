// src/assets/index.js
import about_img from './about_img.jpg'
import bin_icon from './bin_icon.png'
import cart_icon from './cart_icon.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import hero_img from './hero_img.mp4'
import logo from './logo.png'
import menu_icon from './menu_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import razorpay_logo from './razorpay_logo.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import stripe_logo from './stripe_logo.png'
import student_img from './student_img.jpg'
import support_img from './support_img.png'
import christmas_img from './christmas_img.png'

// Import product images
import p_img1 from './p_img1.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'

export const assets = {
	logo,
	hero_img,
	cart_icon,
	dropdown_icon,
	exchange_icon,
	profile_icon,
	quality_icon,
	search_icon,
	star_dull_icon,
	star_icon,
	bin_icon,
	support_img,
	menu_icon,
	about_img,
	contact_img,
	razorpay_logo,
	stripe_logo,
	cross_icon,
	student_img,
	christmas_img,
}

export const products = [
	{
		_id: 'W01',
		name: 'POUR FEMME',
		description:
			'Grupa de arome: Floral-fructat-Lansare: 2024\n' +
			' • Note de vârf: mandarină, lămâie și fructe de pădure\n' +
			' • Note de mijloc: iasomie, bujor și floare de portocal\n' +
			' • Note de bază: mosc, vanilie și lemn de cedru',
		price: 2500,
		image: [p_img1],
		category: 'Women',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 1,
		bestseller: true,
	},
	{
		_id: 'W02',
		name: 'VELORA NUIT',
		description:
			'Grupa de arome: Floral-oriental Lansare: 2024\n' +
			'\n' +
			'Note de vârf: citrice proaspete, bergamotă și flori albe\n' +
			'Note de mijloc: iasomie, miere și bujor\n' +
			'Note de bază: vanilie, chihlimbar și mosc',
		price: 1750,
		image: [p_img2],
		category: 'Women',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 2,
		bestseller: false,
	},
	{
		_id: 'W03',
		name: 'LUNARIA ÉCLAT',
		description:
			'Grupa de arome: Floral-fructat\n' +
			'Lansare: 2024\n' +
			'\n' +
			'Note de vârf: fructe de pădure, citrice și frunze verzi\n' +
			'Note de mijloc: trandafir, lăcrămioare și piersică\n' +
			'Note de bază: lemn de santal, vanilie și mosc alb',
		price: 3000,
		image: [p_img3],
		category: 'Women',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 3,
		bestseller: true,
	},
	{
		_id: 'W04',
		name: 'ANTLER BLOOM',
		description:
			'Grupa de arome: Lemnos-aromatic\n' +
			'Lansare: 2024\n' +
			'\n' +
			'Note de vârf: pin, rozmarin și lavandă\n' +
			'Note de mijloc: cedru, vetiver și iris\n' +
			'Note de bază: lemn de agar, paciuli și boabe de tonka',
		price: 2150,
		image: [p_img4],
		category: 'Women',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 4,
		bestseller: true,
	},
	{
		_id: 'W05',
		name: 'SILK AMBER',
		description:
			'Grupa de arome: Oriental-ambrat\n' +
			'\n' +
			'Lansare: 2024\n' +
			'Note de vârf: portocală, condimente și prune\n' +
			'Note de mijloc: trandafir, ylang-ylang și scorțișoară\n' +
			'Note de bază: ambră, lemn de santal și miere',
		price: 2000,
		image: [p_img5],
		category: 'Women',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 5,
		bestseller: true,
	},
	{
		_id: 'W06',
		name: 'ROYAL BLUSH',
		description:
			'Grupa de arome: Floral-lemnos\n' +
			'Lansare: 2024\n' +
			'\n' +
			'Note de vârf: măr verde, frunze de violete și bergamotă\n' +
			'Note de mijloc: orhidee, iasomie și trandafir\n' +
			'Note de bază: lemn de cedru, mosc și vetiver',
		price: 2500,
		image: [p_img6],
		category: 'Women',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 6,
		bestseller: true,
	},
	{
		_id: 'M01',
		name: 'IGNIS VALOR',
		description:
			'Grupa de arome: Lemnos-condimentat\n' +
			'Lansare: 2024 \n' +
			'Note de vârf: grapefruit, cardamom și piper roz\n' +
			'Note de mijloc: vetiver, mușchi de stejar și lemn de cedru\n' +
			'Note de bază: piele, ambră și boabe de tonka\n',
		price: 2000,
		image: [p_img7],
		category: 'Man',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 7,
		bestseller: true,
	},
	{
		_id: 'M02',
		name: 'BLUE HORIZONT',
		description:
			'Grupa de arome: Acvatic-lemnos\n' +
			'Lansare: 2024\n' +
			'Note de vârf: bergamotă, lămâie și mentă\n' +
			'Note de mijloc: salvie, rozmarin și lavandă\n' +
			'Note de bază: ambră, mosc și lemn de santal\n',
		price: 2150,
		image: [p_img8],
		category: 'Man',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 8,
		bestseller: true,
	},
	{
		_id: 'M03',
		name: 'IRON CODE',
		description:
			'Grupa de arome: Lemnos-aromatic\n' +
			'Lansare: 2024\n' +
			'Note de vârf: mentă, piper negru și măr verde\n' +
			'Note de mijloc: geranium, lavandă și nucșoară\n' +
			'Note de bază: vetiver, mușchi de stejar și lemn de cedru\n',
		price: 3000,
		image: [p_img9],
		category: 'Man',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 9,
		bestseller: true,
	},
	{
		_id: 'M04',
		name: 'AQUILA NOIR',
		description:
			'Grupa de arome: Oriental-lemnos\n' +
			'Lansare: 2024\n' +
			'Note de vârf: piper negru, bergamotă și lavandă\n' +
			'Note de mijloc: lemn de guaiac, scorțișoară și lemn de santal\n' +
			'Note de bază: ambră, tămâie și patchouli\n',
		price: 2750,
		image: [p_img10],
		category: 'Man',
		subCategory: 'Vară',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 10,
		bestseller: true,
	},
	{
		_id: 'M05',
		name: 'GOLDEN EMBER',
		description:
			'Grupa de arome: Oriental-ambar\n' +
			'Lansare: 2024\n' +
			'Note de vârf: scorțișoară, mandarină și cardamom\n' +
			'Note de mijloc: lemn de santal, trandafir și patchouli\n' +
			'Note de bază: ambră, vanilie și piele\n',
		price: 2800,
		image: [p_img11],
		category: 'Man',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 11,
		bestseller: true,
	},
	{
		_id: 'M06',
		name: 'MIDNIGHT SHADOW',
		description:
			'Grupa de arome: Oriental-lemnos\n' +
			'Lansare: 2024\n' +
			'Note de vârf: piper negru, grapefruit și bergamotă\n' +
			'Note de mijloc: lavandă, salvie și lemn de guaiac\n' +
			'Note de bază: tămâie, patchouli și ambră\n',
		price: 2500,
		image: [p_img12],
		category: 'Man',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 12,
		bestseller: true,
	},
	{
		_id: 'U01',
		name: 'AMBER GLOW',
		description:
			'Grupa de arome: Oriental-ambar\n' +
			'Lansare: 2024\n' +
			'Note de vârf: mandarină, ghimbir și scorțișoară\n' +
			'Note de mijloc: lavandă, patchouli și trandafir\n' +
			'Note de bază: ambră, lemn de cedru și vanilie\n',
		price: 2850,
		image: [p_img13],
		category: 'Unisex',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 13,
		bestseller: true,
	},
	{
		_id: 'U02',
		name: 'SILVA ARMONIA',
		description:
			'Grupa de arome: Verde-lemnos\n' +
			'Lansare: 2024\n' +
			'Note de vârf: frunze de violete, mentă și eucalipt\n' +
			'Note de mijloc: iasomie, trandafir și geranium\n' +
			'Note de bază: lemn de cedru, mosc alb și patchouli\n',
		price: 2500,
		image: [p_img14],
		category: 'Unisex',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 14,
		bestseller: true,
	},
	{
		_id: 'U03',
		name: 'SILVER AURA',
		description:
			'Grupa de arome: Citrice-lemnos\n' +
			'Lansare: 2024\n' +
			'Note de vârf: lămâie, bergamotă și ghimbir\n' +
			'Note de mijloc: iasomie, piper alb și mosc\n' +
			'Note de bază: lemn de santal, vetiver și cedru\n',
		price: 1850,
		image: [p_img15],
		category: 'Unisex',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 15,
		bestseller: true,
	},
	{
		_id: 'U04',
		name: 'OMBRA VENTO',
		description:
			'Grupa de arome: Lemnos-condimentat\n' +
			'Lansare: 2024\n' +
			'Note de vârf: bergamotă, piper negru și cardamom\n' +
			'Note de mijloc: vetiver, lavandă și salvie\n' +
			'Note de bază: lemn de santal, mușchi de stejar și boabe de tonka\n',
		price: 2300,
		image: [p_img16],
		category: 'Unisex',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 16,
		bestseller: false,
	},
	{
		_id: 'U05',
		name: 'GOLDEN VEIL',
		description:
			'Grupa de arome: Oriental-floral\n' +
			'Lansare: 2024\n' +
			'Note de vârf: șofran, cardamom și piper roz\n' +
			'Note de mijloc: trandafir, iasomie și tuberoză\n' +
			'Note de bază: ambră, mosc și vanilie',
		price: 2700,
		image: [p_img17],
		category: 'Unisex',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 17,
		bestseller: true,
	},
	{
		_id: 'U06',
		name: 'BLUE MIRAGE',
		description:
			'Grupa de arome: Acvatic-floral\n' +
			'Lansare: 2024\n' +
			'\n' +
			'Note de vârf: apă de mare, bergamotă și mentă\n' +
			'Note de mijloc: lotus, floare de portocal și iasomie\n' +
			'Note de bază: mosc alb, lemn de santal și ambră\n',
		price: 3000,
		image: [p_img18],
		category: 'Unisex',
		subCategory: 'Vară',
		sizes: ['30 ml', '50 ml', '100ml'],
		date: 18,
		bestseller: true,
	},
]
