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
    <h1>New Baby Name</h1>
    <form:form action="/names/${name.id}" method="put" modelAttribute="babyName">
        <form:hidden path="user" value="${userId}"/>
        <div>
            <form:label path="name">New Name:</form:label>
            <form:input path="name"/>
            <form:errors path="name"/>
        </div>
        <br/>
        <div>
            <form:label path="gender">Typical Gender:</form:label>
            <form:select path="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Neutral">Neutral</option>
            </form:select>
            <form:errors path="gender"/>
        </div>
        <br/>
        <div>
            <form:label path="origin">Origin:</form:label>
            <form:input path="origin"/>
            <form:errors path="origin"/>
        </div>
        <br/>
        <div>
            <form:label path="meaning">Meaning:</form:label>
            <form:textarea path="meaning"/>
            <form:errors path="meaning"/>
        </div>
        <br/>
        <input type="submit" value="Submit"/>
        <a href="/home" class="btn-warning">Cancel</a>
        
    </form:form>
</body>
</html>