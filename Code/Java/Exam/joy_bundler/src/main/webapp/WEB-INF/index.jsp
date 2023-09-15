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
    <div class="container text center">
        <h1>Joy Bundler Names</h1>
    </div>
    <div class="container">
        <h2>Registration</h2>
        <form:form action="/register" method="post" modelAttribute="newUser">
            <div class="form-group">
                <form:label path="userName">Username:</form:label>
                <form:input path="userName"></form:input>
                <form:errors path="userName"></form:errors>
            </div>
            <br />
            <div class="form-group">
                <form:label path="email">Email:</form:label>
                <form:input path="email"></form:input>
                <form:errors path="email"></form:errors>
            </div>
            <br />
            <div class="form-group">
                <form:label path="password">Password:</form:label>
                <form:input path="password"></form:input>
                <form:errors path="password"></form:errors>
            </div>
            <br />
            <div class="form-group">
                <form:label path="confirm">Confirm Password:</form:label>
                <form:input path="confirm"></form:input>
                <form:errors path="confirm"></form:errors>
            </div>
            <br />
            <input type="submit" value="Register" class="btn btn-secondary"></input>
        </form:form>
        <br />
        <h2>Login</h2>
        <form:form action="/login" method="post" modelAttribute="newLogin">
            <div class="form-group">
                <form:label path="email">Email:</form:label>
                <form:input path="email"></form:input>
                <form:errors path="email"></form:errors>
            </div>
            <br />
            <div class="form-group">
                <form:label path="password">Password:</form:label>
                <form:input path="password"></form:input>
                <form:errors path="password"></form:errors>
            </div>
            <br />
            <input type="submit" value="Login" class="btn btn-secondary"></input>
        </form:form>
    </div>
</body>

</html>