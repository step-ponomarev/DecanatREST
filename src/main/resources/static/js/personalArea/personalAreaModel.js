'use strict';

import {Http} from "../http.js";

export class PersonalAreaModel {
    constructor() {
        // Person
        this.postPerson = this.postPerson.bind(this);

        this.downloadRoles = this.downloadRoles.bind(this);
        this.downloadGroups = this.downloadGroups.bind(this);

        this.getGroup = this.getGroup.bind(this);

        this.addGroup = this.addGroup.bind(this);

        // Mark
        this.postMark = this.postMark.bind(this);

        this.downloadStudents = this.downloadStudents.bind(this);
        this.downloadTeachers = this.downloadTeachers.bind(this);
        this.downloadSubjects = this.downloadSubjects.bind(this);
        this.downloadPeople = this.downloadPeople.bind(this);
        this.downloadMarks = this.downloadMarks.bind(this);

        this.setStudents = this.setStudents.bind(this);
        this.setTeachers = this.setTeachers.bind(this);
        this.setSubjects = this.setSubjects.bind(this);
        this.setPeople = this.setPeople.bind(this);
        this.setMarks = this.setMarks.bind(this);

        this.getStudent = this.getStudent.bind(this);
        this.getTeacher = this.getTeacher.bind(this);
        this.getSubject = this.getSubject.bind(this);

        this.addStudent = this.addStudent.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.addSubject = this.addSubject.bind(this);

        this.addStudentToView = null;
        this.addTeacherToView = null;
        this.addSubjectToView = null;
        this.addGroupToView = null;

        // Subject
        this.postSubject = this.postSubject.bind(this);
        // Group
        this.postGroup = this.postGroup.bind(this);
    }

    // Person -------------------

    postPerson(person) {
        switch (person.role) {
            case 'STUDENT':
                Http.post('person', person).then(result => this.addStudent(result));
                break;
            case 'TEACHER':
                Http.post('person', person).then(result => this.addTeacher(result));
                break;
        }
    }

    downloadRoles() {
        return Http.get('person/roles');
    }

    downloadGroups() {
        return Http.get('group/all');
    }

    set roles(roles) {
        this._roles = roles;
    }

    set groups(groups) {
        this._groups = groups;
    }

    get roles() {
        return this._roles;
    }

    get groups() {
        return this._groups;
    }

    getGroup(id) {
        return this._groups.find(group => group.id === id);
    }

    addGroup(group) {
        this._groups.push(group);
        this.addGroupToView(group);
    }

    set addGroupToViewMethod(method) {
        this.addGroupToView = method;
    }

    // Mark --------------------

    postMark(mark) {
        Http.post('mark', mark)
    }


    downloadStudents() {
        Http.get('person/students').then(result => this.setStudents(result));
    }

    downloadTeachers() {
        Http.get('person/teachers').then(result => this.setTeachers(result));
    }

    downloadPeople() {
        Http.get('person/all').then(result => this.setPeople(result));
    }

    downloadMarks() {
        Http.get('mark/all').then(result => this.setMarks(result));
    }

    downloadSubjects() {
        Http.get('subject/all').then(result => this.setSubjects(result));
    }

    setStudents(students) {
        this._students = students;
    }

    setTeachers(teachers) {
        this._teachers = teachers;
    }

    setSubjects(subjects) {
        this._subjects = subjects;
    }

    setPeople(people) {
        this._people = people;
    }

    setMarks(marks) {
        this._marks = marks;
    }

    get students() {
        return this._students;
    }

    get teachers() {
        return this._teachers;
    }

    get subjects() {
        return this._subjects;
    }

    get people() {
        return this._people;
    }

    get marks() {
        return this._marks;
    }

    getStudent(id) {
        return this._students.find(student =>
            student.id === id);
    }

    getTeacher(id) {
        return this._teachers.find(teacher =>
            teacher.id === id);

    }

    getSubject(id) {
        return this._subjects.find(subject =>
            subject.id === id);
    }

    addStudent(student) {
        this._students.push(student);
        this.addStudentToView(student);
    }

    addTeacher(teacher) {
        this._teachers.push(teacher);
        this.addTeacherToView(teacher);
    }

    addSubject(subject) {
        this._subjects.push(subject);
        this.addSubjectToView(subject);
    }

    set addStudentToViewMethod(method) {
        this.addStudentToView = method;
    }

    set addTeacherToViewMethod(method) {
        this.addTeacherToView = method;
    }

    set addSubjectToViewMethod(method) {
        this.addSubjectToView = method;
    }

    // Subject
    postSubject(subject) {
        Http.post('subject', subject).then(result => this.addSubject(result));
    }

    // Group
    postGroup(group) {
        Http.post('group', group).then(result => this.addGroup(result));
    }
}