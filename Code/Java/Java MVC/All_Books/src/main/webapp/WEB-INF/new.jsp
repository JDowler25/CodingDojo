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
    <h1>New Book</h1>
    <form:form action="/books" method="post" modelAttribute="book">
        <div>
            <form:label path="title">Title</form:label>
            <form:input path="title"/>
        </div>
        <div>
            <form:label path="description">Description</form:label>
            <form:textarea path="description"/>
        </div>
        <div>
            <form:label path="language">Language</form:label>
            <form:input path="language"/>
        </div>
        <div>
            <form:label path="numberOfPages">Pages</form:label>
            <form:input type="number" path="numberOfPages"/>
        </div>
        <input type="submit" value="Submit"/>
    </form:form>
</body>
</html>