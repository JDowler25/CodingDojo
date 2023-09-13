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
    <title>Tacos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
    <h1>New Ninja</h1>
   <form:form action="/ninjas/create" method="POST" modelAttribute="ninja">
    <form:label path="dojo">Dojo:</form:label>
    <form:select path="dojo">
        <c:forEach var="dojo" items="${dojos}">
            <form:option value="${dojo}">
                <c:out value="${dojo.name}"/>
            </form:option>
        </c:forEach>
    </form:select>
    <form:label path="FirstName">First Name:</form:label>
    <form:input type="text" path="FirstName"></form:input>
    <form:label path="LastName">Last Name:</form:label>
    <form:input type="text" path="LastName"></form:input>
    <form:label path="Age">Age:</form:label>
    <form:input type="number" path="Age"></form:input>
    <input type="submit" value="Create">
   </form:form>
</body>
</html>