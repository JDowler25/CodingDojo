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
    <link rel="stylesheet" href="/css/main.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>

    <style>
        .dark-table {
            background-color: #333;
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
        }

        .dark-table th, .dark-table td {
            border: 1px solid #555;
            padding: 10px;
            text-align: left;
            color: #EEE;
        }

        .dark-table th {
            background-color: #444;
        }

        .dark-table tbody tr:hover {
            background-color: #555;
        }

        .dark-table a {
            color: #9FD8FF;
        }

        .dark-table a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body class="bg-dark text-white">
    <div class="container">
        <h1>Welcome, <c:out value="${user.userName}"></c:out></h1>
        <h3>Books from everyone's shelves:</h3>
        <table class="dark-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Posted by</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="book" items="${books}">
                    <tr>
                        <td><c:out value="${book.id}"/></td>
                        <td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
                        <td><c:out value="${book.author}"/></td>
                        <td><c:out value="${book.user.userName}"/></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
        <a href="/books/new">Add a Book</a>
        <a href="/logout">Logout</a>
    </div>
</body>
</html>