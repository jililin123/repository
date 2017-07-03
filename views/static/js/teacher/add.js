/*
* @Author: 断天涯
* @Date:   2017-07-02 08:24:13
* @Last Modified by:   断天涯
* @Last Modified time: 2017-07-02 23:09:09
*/

define(["jquery", "template", "util", "form", "datepicker", "zh-CN", "validate"], function ($, template, util) {
	var query = util.getQueryObj();
	// 如果是编辑部分，那就要获取到id才能获取到数据；
	if (query.id) {
		$.ajax({
			url: "/api/teacher/edit",
			type: "get",
			data: {
				tc_id: query.id
			},
			success: function (data) {
				console.log(data);
				data.result.title = "讲师编辑";
				data.result.btnText = "保 存";
				data.result.type = "edit";
				var teacherAdd = template("teacherAdd", data.result);
				$(".teacher").html(teacherAdd);

				$("#tcoindate").datepicker({
					format: "yyyy-mm-dd",
					language: "zh-CN"
				})

				$("#teacherform").validate({
					sendForm: false,
					valid: function () {

						var type = $("#btnSave").data("type");
						var url = "";
						if (type == "edit") {
							url = "/api/teacher/update";
						} else {
							url = "/api/teacher/add";
						}

						// 表单提交认证；
						$("#teacherform").ajaxSubmit({
							url:url,
							type: "post",
							success: function (data) {
								if (data.code == 200) {

									location.href = "/teacher/list";

								}
							}
						})
					}
				})

			}
		})
		//如果id不传参数的时候，那就是添加时间
	} else {
		var html = template("teacherAdd", {
			title: "讲师添加",
			btnText: "添 加",
			type: "add"
		})
		$(".teacher").html(html);

		$("#tcoindate").datepicker({
			format: "yyyy-mm-dd",
			language: "zh-CN"
		});

		// 表单认证：
		$("#teacherform").validate({
			onBlur: true,
			sendForm: false,
			eachValidField: function () {
				this.parent().parent().addClass('has-success').removeClass('has-error');
			},

			eachInvalidField: function () {
				this.parent().parent().addClass('has-error').removeClass('has-success');
				this.parent().next().removeClass('hide');
			},
			description: {
				"tcname": {
					required: "请输入用户名",
				},
				"tcpass": {
					required: "请输入密码",
				},
				"tctime": {
					required: "请输入入职时间",
				}
			},

			valid: function () {
				// 表单认证通过的时候然后在获取数据，时间委托时间就不需要或点击了，表单自动就会提交
				var type = $("#btnSave").data("type");
				var url = "";
				if (type == "edit") {
					url = "/api/teacher/update";
				} else {
					url = "/api/teacher/add";
				}

				// 表单提交认证；
				$("#teacherform").ajaxSubmit({
					url: url,
					type: "post",
					success: function (data) {
						if (data.code == 200) {

							location.href = "/teacher/list";

						}
					}
				})
			}
		})
	}
})

