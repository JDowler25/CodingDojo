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
    <title>Books</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
		<a href="/books">Back to the shelves</a>
		<h1>${book.title}</h1>
        <h3> ${user.userName} read ${book.title} by ${book.author}</h3>
        <hr />
        <h4>Here are ${user.userName}'s thoughts</h4>
		<hr />
        <p>${book.thoughts}</p>
        <hr />
	<c:if test="${loggedInUserId == book.user.id}">
	    <form action="/books/${book.id}/delete" method="post">
	        <input type="hidden" name="_method" value="delete"/>
	        <input type="submit" value="Delete" />
	    </form>
	    <a href="/books/${id}/edit">Edit</a>
	</c:if>
</body>
</html>