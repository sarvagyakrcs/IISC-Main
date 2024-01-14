from django.urls import path
from .views import (
    ClstrgrpListCreateView, ClstrgrpDetailView, ClstrgrpBackupListCreateView, ClstrgrpBackupDetailView,
    CounterListCreateView, CounterDetailView, DeptGroupListCreateView, DeptGroupDetailView,
    ExtResourcesListCreateView, ExtResourcesDetailView, extClstrgrpListCreateView, extClstrgrpDetailView,
    ExtStatsListCreateView, ExtStatsDetailView, ExtUsersListCreateView, ExtUsersDetailView,
    ExtUsersBackupListCreateView, ExtUsersBackupDetailView, FacultyListCreateView, FacultyDetailView,
    HipQueueListCreateView, HipQueueDetailView, HpQueueListCreateView, HpQueueDetailView,
    NewExtUsersListCreateView, NewExtUsersDetailView, NisUserDataListCreateView, NisUserDataDetailView,
    NoDueRegListCreateView, NoDueRegDetailView, NoDueListCreateView, NoDueDetailView, ProfgrpListCreateView,
    ProfgrpDetailView, ResourceListCreateView, ResourceDetailView, StatsListCreateView, StatsDetailView,
    StudentListCreateView, StudentDetailView, Student_290115ListCreateView, Student_290115DetailView,
    StudentBackupListCreateView, StudentBackupDetailView, StudentNoLoginListCreateView, StudentNoLoginDetailView,
    UserListCreateView, UserDetailView, ExtUsersSearchByEmail, FacultySearchByEmail
)

urlpatterns = [
    path('clstrgrp/', ClstrgrpListCreateView.as_view(), name='clstrgrp-list-create'),
    path('clstrgrp/<int:pk>/', ClstrgrpDetailView.as_view(), name='clstrgrp-detail'),

    path('clstrgrpbackup/', ClstrgrpBackupListCreateView.as_view(), name='clstrgrpbackup-list-create'),
    path('clstrgrpbackup/<int:pk>/', ClstrgrpBackupDetailView.as_view(), name='clstrgrpbackup-detail'),

    path('counter/', CounterListCreateView.as_view(), name='counter-list-create'),
    path('counter/<int:pk>/', CounterDetailView.as_view(), name='counter-detail'),

    path('deptgroup/', DeptGroupListCreateView.as_view(), name='deptgroup-list-create'),
    path('deptgroup/<int:pk>/', DeptGroupDetailView.as_view(), name='deptgroup-detail'),

    path('extresources/', ExtResourcesListCreateView.as_view(), name='extresources-list-create'),
    path('extresources/<int:pk>/', ExtResourcesDetailView.as_view(), name='extresources-detail'),

    path('extclstrgrp/', extClstrgrpListCreateView.as_view(), name='extclstrgrp-list-create'),
    path('extclstrgrp/<int:pk>/', extClstrgrpDetailView.as_view(), name='extclstrgrp-detail'),

    path('extstats/', ExtStatsListCreateView.as_view(), name='extstats-list-create'),
    path('extstats/<int:pk>/', ExtStatsDetailView.as_view(), name='extstats-detail'),

    path('extusers/', ExtUsersListCreateView.as_view(), name='extusers-list-create'),
    path('extusers/<int:pk>/', ExtUsersDetailView.as_view(), name='extusers-detail'),

    path('extusersbackup/', ExtUsersBackupListCreateView.as_view(), name='extusersbackup-list-create'),
    path('extusersbackup/<int:pk>/', ExtUsersBackupDetailView.as_view(), name='extusersbackup-detail'),

    path('faculty/', FacultyListCreateView.as_view(), name='faculty-list-create'),
    path('faculty/<int:pk>/', FacultyDetailView.as_view(), name='faculty-detail'),

    path('hipqueue/', HipQueueListCreateView.as_view(), name='hipqueue-list-create'),
    path('hipqueue/<str:pk>/', HipQueueDetailView.as_view(), name='hipqueue-detail'),

    path('hpqueue/', HpQueueListCreateView.as_view(), name='hpqueue-list-create'),
    path('hpqueue/<int:pk>/', HpQueueDetailView.as_view(), name='hpqueue-detail'),

    path('newextusers/', NewExtUsersListCreateView.as_view(), name='newextusers-list-create'),
    path('newextusers/<int:pk>/', NewExtUsersDetailView.as_view(), name='newextusers-detail'),

    path('nisuserdata/', NisUserDataListCreateView.as_view(), name='nisuserdata-list-create'),
    path('nisuserdata/<int:pk>/', NisUserDataDetailView.as_view(), name='nisuserdata-detail'),

    path('noduereg/', NoDueRegListCreateView.as_view(), name='noduereg-list-create'),
    path('noduereg/<int:pk>/', NoDueRegDetailView.as_view(), name='noduereg-detail'),

    path('nodue/', NoDueListCreateView.as_view(), name='nodue-list-create'),
    path('nodue/<int:pk>/', NoDueDetailView.as_view(), name='nodue-detail'),

    path('profgrp/', ProfgrpListCreateView.as_view(), name='profgrp-list-create'),
    path('profgrp/<int:pk>/', ProfgrpDetailView.as_view(), name='profgrp-detail'),

    path('resource/', ResourceListCreateView.as_view(), name='resource-list-create'),
    path('resource/<int:pk>/', ResourceDetailView.as_view(), name='resource-detail'),

    path('stats/', StatsListCreateView.as_view(), name='stats-list-create'),
    path('stats/<int:pk>/', StatsDetailView.as_view(), name='stats-detail'),

    path('student/', StudentListCreateView.as_view(), name='student-list-create'),
    path('student/<int:pk>/', StudentDetailView.as_view(), name='student-detail'),

    path('student290115/', Student_290115ListCreateView.as_view(), name='student290115-list-create'),
    path('student290115/<int:pk>/', Student_290115DetailView.as_view(), name='student290115-detail'),

    path('studentbackup/', StudentBackupListCreateView.as_view(), name='studentbackup-list-create'),
    path('studentbackup/<int:pk>/', StudentBackupDetailView.as_view(), name='studentbackup-detail'),

    path('studentnologin/', StudentNoLoginListCreateView.as_view(), name='studentnologin-list-create'),
    path('studentnologin/<int:pk>/', StudentNoLoginDetailView.as_view(), name='studentnologin-detail'),

    path('user/', UserListCreateView.as_view(), name='user-list-create'),
    path('user/<str:pk>/', UserDetailView.as_view(), name='user-detail'),

    # custom-views
    path('ext-users-search-by-email/', ExtUsersSearchByEmail.as_view(), name='ext_users_search_by_email'),
    path('faculty-search-by-email/', FacultySearchByEmail.as_view(), name='faculty_search_by_email'),


]


'''
API Documentation
    This document provides an overview of the endpoints available in the API, along with their associated views.

    Clstrgrp
        List/Create Clstrgrp

    Endpoint: /clstrgrp/
    Method: GET (List), POST (Create)
    View: ClstrgrpListCreateView
    Description: Retrieve a list of Clstrgrp instances or create a new one.
    Retrieve/Update/Delete Clstrgrp

    Endpoint: /clstrgrp/<int:pk>/
    Method: GET (Retrieve), PUT or PATCH (Update), DELETE (Delete)
    View: ClstrgrpDetailView
    Description: Retrieve, update, or delete a specific Clstrgrp instance by ID.
    ClstrgrpBackup
    List/Create ClstrgrpBackup

    Endpoint: /clstrgrpbackup/
    Method: GET (List), POST (Create)
    View: ClstrgrpBackupListCreateView
    Description: Retrieve a list of ClstrgrpBackup instances or create a new one.
    Retrieve/Update/Delete ClstrgrpBackup

    Endpoint: /clstrgrpbackup/<int:pk>/
    Method: GET (Retrieve), PUT or PATCH (Update), DELETE (Delete)
    View: ClstrgrpBackupDetailView
    Description: Retrieve, update, or delete a specific ClstrgrpBackup instance by ID.
    Counter
    List/Create Counter

    Endpoint: /counter/
    Method: GET (List), POST (Create)
    View: CounterListCreateView
    Description: Retrieve a list of Counter instances or create a new one.
    Retrieve/Update/Delete Counter

    Endpoint: /counter/<int:pk>/
    Method: GET (Retrieve), PUT or PATCH (Update), DELETE (Delete)
    View: CounterDetailView
    Description: Retrieve, update, or delete a specific Counter instance by ID.
    DeptGroup (and so on for other models...)
    This is a basic documentation template. You can expand and customize it based on your project's specific needs, including more details about request and response formats, authentication, permissions, etc.
'''