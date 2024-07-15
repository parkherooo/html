<%@page import="javax.security.auth.Subject"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%
	String subject[]={"HTML", "CSS", "Javascript","JAVA", "Python"};
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form>
	<label for="select">당신이 선호하는 언어는 무엇인가요?</label>
	<select id="select">
	<%for(int i=0; i<subject.length;i++){ %>
		<option value="<%=subject[i]%>"><%=subject[i]%></option>
	<%} %>
	</select>
</form>
</body>
</html>