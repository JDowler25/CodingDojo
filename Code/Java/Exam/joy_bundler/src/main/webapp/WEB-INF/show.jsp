<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Joy Bundler</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
		<a href="/home">Back Home</a>
		<h1>${name.name}</h1>
        <h3>(added by ${name.user.userName})</h3>
        <br />
        <h4>Gender: ${name.gender}</h4>
		<br />
        <h4>Origin: ${name.origin}</h4>
        <br />
        <p>Meaning: ${name.meaning}</p>
        <hr />
	<c:if test="${loggedInUserId == name.user.id}">
	    <form action="/names/${name.id}/delete" method="post">
	        <input type="hidden" name="_method" value="delete"/>
	        <input type="submit" value="Delete" />
	    </form>
	    <a href="/names/${id}/edit">Edit</a>
	</c:if>
</body>
</html>