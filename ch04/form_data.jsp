<%@ page  contentType="text/html; charset=UTF-8"%>
<%//jsp & java영역 (대소문자구문)
	//ch04/form_data .jsp?id=aaa&pwd=1234
	String id = request.getParameter("id");
	String pwd = request.getParameter("pwd");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
id:<%=id %><br>
pwd<%=pwd %>
</body>
</html>