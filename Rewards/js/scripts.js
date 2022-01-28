H = function ()
			{
				var t = e(this),
					o = t.data(a),
					n = a + "_" + o.idx,
					i = e("#mCSB_" + o.idx +
						"_container").parent();
				i.bind("scroll." + n, function ()
				{
					(0 !== i.scrollTop() || 0 !== i
						.scrollLeft()) && e(".mCSB_" +
						o.idx + "_scrollbar").css(
						"visibility", "hidden")
				})
			}

			$('h5.charge_tit a').bind('click', function(){
				$('h5.charge_tit a').removeClass('on');
				$(this).addClass('on');

				$('article.charge_cont').hide();
				$(this).parent().next().show();
			});