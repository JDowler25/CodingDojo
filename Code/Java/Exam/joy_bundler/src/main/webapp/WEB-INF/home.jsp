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
    <div class="container">
        <div class="container d-inline-flex justify-content-between align-items-center">
            <h1>Hello, <c:out value="${user.userName}"></c:out>. Here are some name suggestions...</h1>
            <a href="/logout">Logout</a>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Baby Names</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="babyName" items="${names}">
                    <tr>
                        <td><a href="/names/${babyName.id}"><c:out value="${babyName.name}"/></a></td>
                        <td><c:out value="${babyName.gender}"/></td>
                        <td>Origin: <c:out value="${babyName.origin}"/></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
        <a href="/names/new">new name</a>
    </div>
</body>
</html>

