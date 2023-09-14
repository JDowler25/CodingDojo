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
    <h1>Edit Book</h1>
    <form:form action="/books/${book.id}" method="put" modelAttribute="book">
        <form:hidden path="user" value="${userId}"/>
        <div>
            <form:label path="title">Title:</form:label>
            <form:input path="title"/>
            <form:errors path="title"/>
        </div>
        <div>
            <form:label path="author">Author:</form:label>
            <form:textarea path="author"/>
            <form:errors path="author"/>
        </div>
        <div>
            <form:label path="thoughts">Thoughts:</form:label>
            <form:input path="thoughts"/>
            <form:errors path="thoughts"/>
        </div>
        <input type="submit" value="Submit"/>
    </form:form>
</body>
</html>