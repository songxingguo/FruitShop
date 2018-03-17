function formValidate() {
  var name = $('#name').val().replace(/(^\s*)|(\s*$)/g, "");
  var tel = $('#tel').val().replace(/(^\s*)|(\s*$)/g, "");
  var info = $('#info').val().replace(/(^\s*)|(\s*$)/g, "");
  if (name == '' || name == null) {
    alert('姓名不能为空！');
  }
  else if (tel == '' || tel == null) {
    alert('电话不能为空！');
  }    
  else if (!checkphone(tel)) {
      alert('电话格式错误！');
  }
  else if (info == '' || info == null) {
    alert('信息不能为空！');
  }
  else {
  	$.ajax({
	  type: "post",
	  url: "",
	  data: "name=" + escape(name) + "&tel=" + escape(tel) + '&info=' + escape(info) + '&tt=' + new Date().getTime(),
	  dataType: 'json',
	  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	  success: function(data) {
	         alert("提交成功！");
	  },
	  error: function() {
	    alert('提交失败！');
	  }
	})
  }
}


function checkphone(tel) {
	var pattern = /^1[34578]\d{9}$/; 
	return pattern.test(tel);
}

$('#submit').on('click', function() {
 	formValidate();
});