from django.db import models

class Clstrgrp(models.Model):
    name = models.CharField(max_length=20, blank=False, null=False, primary_key=True)
    count = models.IntegerField(blank=True, null=True)
    curnt = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'clstrgrp'


class ClstrgrpBackup(models.Model):
    name = models.CharField(max_length=20, blank=False, null=False, primary_key=True)
    count = models.IntegerField(blank=True, null=True)
    curnt = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'clstrgrp_backup'


class Counter(models.Model):
    nrid = models.IntegerField(blank=False, null=False, primary_key=True)
    ugid = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'counter'


class DeptGroup(models.Model):
    dept = models.CharField(max_length=7, blank=True, null=True)
    grpname = models.CharField(max_length=10, blank=True, null=True)
    grpid = models.IntegerField(blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'deptgroup'


class ExtResources(models.Model):
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)
    request = models.CharField(max_length=25, blank=True, null=True)
    approved = models.CharField(max_length=25, blank=True, null=True)
    granted = models.CharField(max_length=25, blank=True, null=True)
    info = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ext_resources'


class extClstrgrp(models.Model):
    name = models.CharField(max_length=20, blank=False, null=False, primary_key=True)
    count = models.IntegerField(blank=True, null=True)
    curnt = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'extclstrgrp'


class ExtStats(models.Model):
    acapld = models.IntegerField(blank=True, null=True)
    acvltd = models.IntegerField(blank=True, null=True)
    acactvd = models.IntegerField(blank=True, null=True)
    acdltd = models.IntegerField(blank=True, null=True)
    rsapld = models.IntegerField(blank=True, null=True)
    rsvltd = models.IntegerField(blank=True, null=True)
    rsactvd = models.IntegerField(blank=True, null=True)
    rsdltd = models.IntegerField(blank=True, null=True)
    monthyear = models.CharField(max_length=7, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'extstats'


class ExtUsers(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=20)
    hd = models.CharField(max_length=50)
    fname = models.CharField(max_length=20)
    regno = models.CharField(max_length=20)
    iname = models.CharField(max_length=100)
    doe = models.DateField()
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    noe = models.CharField(max_length=15)
    dact = models.DateField()
    dexp = models.DateField()
    rest = models.CharField(max_length=50)
    proof = models.CharField(max_length=200)
    fid = models.CharField(blank=False, null=False, primary_key=True, max_length=15)
    ext_lock_date = models.TextField()
    remarks = models.TextField()

    class Meta:
        managed = False
        db_table = 'extusers'


class ExtUsersBackup(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=35, blank=True, null=True)
    fname = models.CharField(max_length=20)
    regno = models.CharField(blank=False, null=False, primary_key=True, max_length=15)
    iname = models.CharField(max_length=100)
    doe = models.DateField()
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, blank=True, null=True)
    noe = models.CharField(max_length=15)
    dact = models.DateField()
    dexp = models.DateField()
    rest = models.CharField(max_length=50)
    proof = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'extusers_backup'


class Faculty(models.Model):
    empid = models.IntegerField(blank=False, null=False, primary_key=True)
    facname = models.CharField(max_length=255)
    facdept = models.CharField(max_length=255)
    facdesg = models.CharField(max_length=255)
    facgender = models.CharField(max_length=255)
    facemailid = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'faculty'


class HipQueue(models.Model):
    hp_status = models.IntegerField()
    cray_hp_l = models.CharField(max_length=10, blank=True, null=True)
    cray_hp_s = models.CharField(max_length=10, blank=True, null=True)
    dgx_hp_l = models.CharField(max_length=10, blank=True, null=True)
    dgx_hp_s = models.CharField(max_length=10, blank=True, null=True)
    fid = models.CharField(blank=False, null=False, primary_key=True, max_length=15)

    class Meta:
        managed = False
        db_table = 'hip_queue'


class HpQueue(models.Model):
    hp_status = models.IntegerField()
    hp_l = models.CharField(max_length=10, blank=True, null=True)
    hp_s = models.CharField(max_length=10, blank=True, null=True)
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'hp_queue'


class NewExtUsers(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=35, blank=True, null=True)
    fname = models.CharField(max_length=20)
    regno = models.CharField(blank=False, null=False, primary_key=True, max_length=15)
    iname = models.CharField(max_length=100)
    doe = models.DateField()
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, blank=True, null=True)
    noe = models.CharField(max_length=15)
    dact = models.DateField()
    dexp = models.DateField()
    rest = models.CharField(max_length=50)
    proof = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'new_extusers'


class NisUserData(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=20, blank=True, null=True)
    hd = models.CharField(max_length=75, blank=True, null=True)
    gname = models.CharField(max_length=10, blank=True, null=True)
    dept = models.CharField(max_length=10, blank=True, null=True)
    degree = models.CharField(max_length=10, blank=True, null=True)
    noreg = models.CharField(max_length=5, blank=True, null=True)
    rdate = models.DateField(blank=True, null=True)
    regno = models.CharField(max_length=75, blank=True, null=True)
    name = models.CharField(max_length=75, blank=True, null=True)
    facname = models.CharField(max_length=75, blank=True, null=True)
    phno = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=75, blank=True, null=True)
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'nis_user_data'


class no_due_reg(models.Model):
    name = models.CharField(max_length=255)
    srno = models.CharField(max_length=255, blank=False, null=False, primary_key=True)
    dept = models.CharField(max_length=255)
    guidename = models.CharField(max_length=255)
    comp_uid = models.CharField(max_length=255)
    matlab_license = models.CharField(max_length=255)
    sw_cds_borrowed = models.CharField(max_length=255)
    dateofreg = models.DateField()
    dateofterm = models.DateField()
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=155)

    class Meta:
        managed = False
        db_table = 'no_due_reg'


class NoDue(models.Model):
    due_id = models.BigAutoField(blank=False, null=False, primary_key=True)
    fid = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    sr_no = models.CharField(max_length=255)
    dept_name = models.CharField(max_length=255)
    guide_name = models.CharField(max_length=255)
    date_joining = models.DateField()
    date_leaving = models.DateField()
    prim_mail = models.CharField(unique=True, max_length=255)
    sec_mail = models.CharField(max_length=255)
    contact = models.CharField(max_length=255)
    comp_id = models.CharField(max_length=255)
    matlab_lic = models.CharField(max_length=255)
    lus_space = models.CharField(max_length=255)
    submits = models.DateTimeField()
    status = models.CharField(max_length=255)
    email_status = models.IntegerField()
    errors = models.TextField()

    class Meta:
        managed = False
        db_table = 'nodue'


class Profgrp(models.Model):
    group_id = models.AutoField(blank=False, null=False, primary_key=True)
    group_name = models.CharField(max_length=255)
    empid = models.IntegerField()
    prof_name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'profgrp'


class Resources(models.Model):
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)
    request = models.CharField(max_length=25, blank=True, null=True)
    approved = models.CharField(max_length=25, blank=True, null=True)
    granted = models.CharField(max_length=25, blank=True, null=True)
    info = models.TextField(blank=True, null=True)
    nvidia_repos = models.TextField()
    group_name = models.CharField(max_length=255)
    uid_facid = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'resources'


class Stats(models.Model):
    acapld = models.IntegerField(blank=True, null=True)
    acvltd = models.IntegerField(blank=True, null=True)
    acactvd = models.IntegerField(blank=True, null=True)
    acdltd = models.IntegerField(blank=True, null=True)
    rsapld = models.IntegerField(blank=True, null=True)
    rsvltd = models.IntegerField(blank=True, null=True)
    rsactvd = models.IntegerField(blank=True, null=True)
    rsdltd = models.IntegerField(blank=True, null=True)
    monthyear = models.CharField(max_length=7, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'stats'


class Student(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=20, blank=True, null=True)
    hd = models.CharField(max_length=75, blank=True, null=True)
    gname = models.CharField(max_length=10, blank=True, null=True)
    dept = models.CharField(max_length=10, blank=True, null=True)
    degree = models.CharField(max_length=10, blank=True, null=True)
    noreg = models.CharField(max_length=5, blank=True, null=True)
    rdate = models.DateField(blank=True, null=True)
    regno = models.CharField(max_length=75, blank=True, null=True)
    name = models.CharField(max_length=75, blank=True, null=True)
    facid = models.IntegerField()
    facname = models.CharField(max_length=75, blank=True, null=True)
    phno = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=75, blank=False, null=False)
    email2 = models.CharField(max_length=75)
    role = models.CharField(max_length=255)
    ext_lck_date = models.TextField()
    remarks = models.TextField()
    fid = models.CharField(primary_key=True, max_length=15, blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'student'


class Student_290115(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=20, blank=True, null=True)
    hd = models.CharField(max_length=75, blank=True, null=True)
    gname = models.CharField(max_length=10, blank=True, null=True)
    dept = models.CharField(max_length=10, blank=True, null=True)
    degree = models.CharField(max_length=10, blank=True, null=True)
    noreg = models.CharField(max_length=5, blank=True, null=True)
    rdate = models.DateField(blank=True, null=True)
    regno = models.CharField(max_length=75, blank=True, null=True)
    name = models.CharField(max_length=75, blank=True, null=True)
    facname = models.CharField(max_length=75, blank=True, null=True)
    phno = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=75, blank=True, null=True)
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'student_290115'


class StudentBackup(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=20, blank=True, null=True)
    hd = models.CharField(max_length=75, blank=True, null=True)
    gname = models.CharField(max_length=10, blank=True, null=True)
    dept = models.CharField(max_length=10, blank=True, null=True)
    degree = models.CharField(max_length=10, blank=True, null=True)
    noreg = models.CharField(max_length=5, blank=True, null=True)
    rdate = models.DateField(blank=True, null=True)
    regno = models.CharField(max_length=75, blank=True, null=True)
    name = models.CharField(max_length=75, blank=True, null=True)
    facname = models.CharField(max_length=75, blank=True, null=True)
    phno = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=75, blank=True, null=True)
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'student_backup'


class StudentNoLogin(models.Model):
    status = models.CharField(max_length=1, blank=True, null=True)
    uid = models.CharField(max_length=20, blank=True, null=True)
    hd = models.CharField(max_length=75, blank=True, null=True)
    gname = models.CharField(max_length=10, blank=True, null=True)
    dept = models.CharField(max_length=10, blank=True, null=True)
    degree = models.CharField(max_length=10, blank=True, null=True)
    noreg = models.CharField(max_length=5, blank=True, null=True)
    rdate = models.DateField(blank=True, null=True)
    regno = models.CharField(max_length=75, blank=True, null=True)
    name = models.CharField(max_length=75, blank=True, null=True)
    facid = models.IntegerField()
    facname = models.CharField(max_length=75, blank=True, null=True)
    phno = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=75, blank=True, null=True)
    email2 = models.CharField(max_length=75)
    role = models.CharField(max_length=255)
    ext_lck_date = models.TextField()
    remarks = models.TextField()
    fid = models.CharField(max_length=15, blank=False, null=False, primary_key=True)

    class Meta:
        managed = False
        db_table = 'student_nologin'


class User(models.Model):
    username = models.CharField(max_length=255, primary_key=True, null=False, blank=False)
    passd = models.CharField(max_length=255)
    role = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'users'
