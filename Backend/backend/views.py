# views.py
from rest_framework import generics
from .models import Clstrgrp, ClstrgrpBackup, Counter, DeptGroup, ExtResources, extClstrgrp
from .models import ExtStats, ExtUsers, ExtUsersBackup, Faculty, HipQueue, HpQueue
from .models import NewExtUsers, NisUserData, no_due_reg, NoDue, Profgrp, Resources, Stats, Student, Student_290115
from .models import StudentBackup, StudentNoLogin, User
from .serializers import ClstrgrpSerializer, ClstrgrpBackupSerializer, CounterSerializer, DeptGroupSerializer
from .serializers import ExtResourcesSerializer, extClstrgrpSerializer, ExtStatsSerializer, ExtUsersSerializer
from .serializers import ExtUsersBackupSerializer, FacultySerializer, HipQueueSerializer, HpQueueSerializer
from .serializers import NewExtUsersSerializer, NisUserDataSerializer, NoDueRegSerializer, NoDueSerializer
from .serializers import ProfgrpSerializer, ResourceSerializer, StatsSerializer, StudentSerializer, Student_290115Serializer
from .serializers import StudentBackupSerializer, StudentNoLoginSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ExtUsers
from .serializers import ExtUsersSerializer

# Clstrgrp views
class ClstrgrpListCreateView(generics.ListCreateAPIView):
    queryset = Clstrgrp.objects.all()
    serializer_class = ClstrgrpSerializer

class ClstrgrpDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Clstrgrp.objects.all()
    serializer_class = ClstrgrpSerializer

# ClstrgrpBackup views
class ClstrgrpBackupListCreateView(generics.ListCreateAPIView):
    queryset = ClstrgrpBackup.objects.all()
    serializer_class = ClstrgrpBackupSerializer

class ClstrgrpBackupDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ClstrgrpBackup.objects.all()
    serializer_class = ClstrgrpBackupSerializer

# Counter views
class CounterListCreateView(generics.ListCreateAPIView):
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer

class CounterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer

# DeptGroup views
class DeptGroupListCreateView(generics.ListCreateAPIView):
    queryset = DeptGroup.objects.all()
    serializer_class = DeptGroupSerializer

class DeptGroupDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DeptGroup.objects.all()
    serializer_class = DeptGroupSerializer

# ExtResources views
class ExtResourcesListCreateView(generics.ListCreateAPIView):
    queryset = ExtResources.objects.all()
    serializer_class = ExtResourcesSerializer

class ExtResourcesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ExtResources.objects.all()
    serializer_class = ExtResourcesSerializer

# extClstrgrp views
class extClstrgrpListCreateView(generics.ListCreateAPIView):
    queryset = extClstrgrp.objects.all()
    serializer_class = extClstrgrpSerializer

class extClstrgrpDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = extClstrgrp.objects.all()
    serializer_class = extClstrgrpSerializer

# ExtStats views
class ExtStatsListCreateView(generics.ListCreateAPIView):
    queryset = ExtStats.objects.all()
    serializer_class = ExtStatsSerializer

class ExtStatsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ExtStats.objects.all()
    serializer_class = ExtStatsSerializer

# ExtUsers views
class ExtUsersListCreateView(generics.ListCreateAPIView):
    queryset = ExtUsers.objects.all()
    serializer_class = ExtUsersSerializer

class ExtUsersDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ExtUsers.objects.all()
    serializer_class = ExtUsersSerializer

# ExtUsersBackup views
class ExtUsersBackupListCreateView(generics.ListCreateAPIView):
    queryset = ExtUsersBackup.objects.all()
    serializer_class = ExtUsersBackupSerializer

class ExtUsersBackupDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ExtUsersBackup.objects.all()
    serializer_class = ExtUsersBackupSerializer

# Faculty views
class FacultyListCreateView(generics.ListCreateAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

# HipQueue views
class HipQueueListCreateView(generics.ListCreateAPIView):
    queryset = HipQueue.objects.all()
    serializer_class = HipQueueSerializer

class HipQueueDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HipQueue.objects.all()
    serializer_class = HipQueueSerializer

# HpQueue views
class HpQueueListCreateView(generics.ListCreateAPIView):
    queryset = HpQueue.objects.all()
    serializer_class = HpQueueSerializer

class HpQueueDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HpQueue.objects.all()
    serializer_class = HpQueueSerializer

# NewExtUsers views
class NewExtUsersListCreateView(generics.ListCreateAPIView):
    queryset = NewExtUsers.objects.all()
    serializer_class = NewExtUsersSerializer

class NewExtUsersDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NewExtUsers.objects.all()
    serializer_class = NewExtUsersSerializer

# NisUserData views
class NisUserDataListCreateView(generics.ListCreateAPIView):
    queryset = NisUserData.objects.all()
    serializer_class = NisUserDataSerializer

class NisUserDataDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NisUserData.objects.all()
    serializer_class = NisUserDataSerializer

# NoDueReg views
class NoDueRegListCreateView(generics.ListCreateAPIView):
    queryset = no_due_reg.objects.all()
    serializer_class = NoDueRegSerializer

class NoDueRegDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = no_due_reg.objects.all()
    serializer_class = NoDueRegSerializer

# NoDue views
class NoDueListCreateView(generics.ListCreateAPIView):
    queryset = NoDue.objects.all()
    serializer_class = NoDueSerializer

class NoDueDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NoDue.objects.all()
    serializer_class = NoDueSerializer

# Profgrp views
class ProfgrpListCreateView(generics.ListCreateAPIView):
    queryset = Profgrp.objects.all()
    serializer_class = ProfgrpSerializer

class ProfgrpDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profgrp.objects.all()
    serializer_class = ProfgrpSerializer

# Resource views
class ResourceListCreateView(generics.ListCreateAPIView):
    queryset = Resources.objects.all()
    serializer_class = ResourceSerializer

class ResourceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Resources.objects.all()
    serializer_class = ResourceSerializer

# Stats views
class StatsListCreateView(generics.ListCreateAPIView):
    queryset = Stats.objects.all()
    serializer_class = StatsSerializer

class StatsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stats.objects.all()
    serializer_class = StatsSerializer

# Student views
class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

# Student_290115 views
class Student_290115ListCreateView(generics.ListCreateAPIView):
    queryset = Student_290115.objects.all()
    serializer_class = Student_290115Serializer

class Student_290115DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student_290115.objects.all()
    serializer_class = Student_290115Serializer

# StudentBackup views
class StudentBackupListCreateView(generics.ListCreateAPIView):
    queryset = StudentBackup.objects.all()
    serializer_class = StudentBackupSerializer

class StudentBackupDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudentBackup.objects.all()
    serializer_class = StudentBackupSerializer

# StudentNoLogin views
class StudentNoLoginListCreateView(generics.ListCreateAPIView):
    queryset = StudentNoLogin.objects.all()
    serializer_class = StudentNoLoginSerializer

class StudentNoLoginDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudentNoLogin.objects.all()
    serializer_class = StudentNoLoginSerializer

# User views
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Custom Views 
#django-rest-framework

class ExtUsersSearchByEmail(APIView):
    def get(self, request, *args, **kwargs):
        email = self.request.query_params.get('email', None)

        if email is None:
            return Response({'error': 'Email parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = ExtUsers.objects.get(email=email)
            serializer = ExtUsersSerializer(user)
            return Response(serializer.data)
        except ExtUsers.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        

class FacultySearchByEmail(APIView):
    def get(self, request, *args, **kwargs):
        email = request.query_params.get('email', None)
        if not email:
            return Response({'error': 'Email parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            faculty = Faculty.objects.get(facemailid=email)
            serializer = FacultySerializer(faculty)
            return Response(serializer.data)
        except Faculty.DoesNotExist:
            return Response({'error': 'Faculty not found'}, status=status.HTTP_404_NOT_FOUND)