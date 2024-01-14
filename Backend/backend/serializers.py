# serializers.py
from rest_framework import serializers
from .models import Clstrgrp, ClstrgrpBackup, Counter, DeptGroup, ExtResources, extClstrgrp
from .models import ExtStats, ExtUsers, ExtUsersBackup, Faculty, HipQueue, HpQueue
from .models import NewExtUsers, NisUserData, no_due_reg, NoDue, Profgrp, Resources, Stats, Student, Student_290115
from .models import StudentBackup, StudentNoLogin, User

class ClstrgrpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clstrgrp
        fields = '__all__'

class ClstrgrpBackupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClstrgrpBackup
        fields = '__all__'

class CounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counter
        fields = '__all__'

class DeptGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeptGroup
        fields = '__all__'

class ExtResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtResources
        fields = '__all__'

class extClstrgrpSerializer(serializers.ModelSerializer):
    class Meta:
        model = extClstrgrp
        fields = '__all__'

class ExtStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtStats
        fields = '__all__'

class ExtUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtUsers
        fields = '__all__'

class ExtUsersBackupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtUsersBackup
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class HipQueueSerializer(serializers.ModelSerializer):
    class Meta:
        model = HipQueue
        fields = '__all__'

class HpQueueSerializer(serializers.ModelSerializer):
    class Meta:
        model = HpQueue
        fields = '__all__'

class NewExtUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewExtUsers
        fields = '__all__'

class NisUserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = NisUserData
        fields = '__all__'

class NoDueRegSerializer(serializers.ModelSerializer):
    class Meta:
        model = no_due_reg
        fields = '__all__'

class NoDueSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoDue
        fields = '__all__'

class ProfgrpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profgrp
        fields = '__all__'

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resources
        fields = '__all__'

class StatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stats
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class Student_290115Serializer(serializers.ModelSerializer):
    class Meta:
        model = Student_290115
        fields = '__all__'

class StudentBackupSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentBackup
        fields = '__all__'

class StudentNoLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentNoLogin
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
