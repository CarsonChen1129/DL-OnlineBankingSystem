from rest_framework import permissions


class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, account):
        print "in IsAccountOwner has_object_permission"
        if request.user:
            return account == request.user
        return False