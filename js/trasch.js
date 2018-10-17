// JOIN new data with old elements
	var rects = g.selectAll('circle')
					.data(data, function(d) {
						return d.stavning;
					});

	// EXIT old elements not present in new data
	rects.exit()
		.attr("fill", "red")
		.transition(t)
			.attr("cy", y(0))
		.remove();

	// UPDATE old elements present in new data
	rects.transition(t)
		.attr("cy", (d) => { return y(d[value]); })
		.attr("cx", (d) => { return x(d.stavning); })
		.attr("r", 5);

	// ENTER new elements present in new data
	rects.enter()
			.append('circle')
                .attr("class", "node")
                .attr("stroke", "#474747")
				.attr("cx", (d) => { return x(d.stavning); })
				.attr("r", 5)
				.attr("fill", (d) => { return color(d.gender); })
				.attr("cy", y(0))

				.transition(t)
					.attr("cy", (d) => { return y(d[value]); })

	// var label = flag ? "REVENUE" : "PROFIT";

	// yLabel.text(label);




	return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle('Hällefors - Kvalitétssäkring');
