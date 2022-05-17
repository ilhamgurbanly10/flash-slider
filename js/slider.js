
flashSlider('.my-slider-1', {
	gap: 10,
	autoplay: true,
	autoplaySpeed: "fast",
	width: "80%",
	slideToShow: 1,
	indexes: true,
	height: "70vw",
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 2,
				height: "50vw",
				dots: false,

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 3,
				height: "40vw",

			}
		},
		{
			breakpoint: 992,
			settings: {
				gap: 20,
				slideToShow: 5,
				width: "90%",
				height: "22vw",
			}
		}
	]
});

flashSlider('.my-slider-2', {
	gap: 10,
	autoplay: true,
	autoplaySpeed: "fast",
	width: "80%",
	dots: true,
	slideToShow: 1,
	indexes: true,
	height: "70vw",
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 2,
				height: "50vw",

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 3,
				height: "40vw",

			}
		},
		{
			breakpoint: 992,
			settings: {
				slideToShow: 4,
				width: "90%",
				height: "22vw",
			}
		}
	]
});

flashSlider('.my-slider-3', {
	gap: 10,
	autoplay: true,
	autoplaySpeed: "fast",
	width: "80%",
	dots: true,
	buttons: true,
	buttonsHTML: ["Slide 01", "Slide 02", "Slide 03", "Slide 04", "Slide 05", "Slide 06", "Slide 07", "Slide 08"
	, "Slide 09", "Slide 10", "Slide 11", "Slide 12", "Slide 13", "Slide 14"],
	slideToShow: 1,
	slideToScrollAbsolutely: true,
	indexes: false,
	pauseOnFocus: true,
	pauseOnHover: false,
	height: "70vw",
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 2,
				height: "50vw",

			}
		},
		{
			breakpoint: 768,
			settings: {
				height: "40vw",

			}
		},
		{
			breakpoint: 992,
			settings: {
				slideToShow: 4,
				width: "90%",
				height: "22vw",
			}
		}
	]
});

flashSlider('.my-slider-4', {
	gap: 20,
	autoplay: false,
	width: "80%",
	dots: true,
	buttons: true,
	buttonsHTML: ["Slide 01", "Slide 02", "Slide 03", "Slide 04", "Slide 05", "Slide 06", "Slide 07", "Slide 08"
	, "Slide 09", "Slide 10", "Slide 11", "Slide 12", "Slide 13", "Slide 14"],
	slideToShow: 1,
	indexes: true,
	pauseOnHover: true,
	height: "70vw",
	responsive: [
		{
			breakpoint: 576,
			settings: {
				height: "50vw",

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 2,
				height: "40vw",

			}
		},
		{
			breakpoint: 992,
			settings: {
				slideToShow: 3,
				width: "90%",
				height: "22vw",
			}
		}
	]
});