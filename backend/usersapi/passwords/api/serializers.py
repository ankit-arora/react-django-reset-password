from rest_framework import serializers
from django.contrib.auth.models import User
import re


class PasswordSerializer(serializers.Serializer):
    username = serializers.CharField()
    newPassword = serializers.CharField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
        # instance.username = validated_data.get('username', instance.username)
        # instance.password = validated_data.get('hashedNewPassword', instance.password)
        # instance.save()
        # return instance

    def validate(self, data):
        """ check that username and new password are different """
        if data["username"] == data["newPassword"]:
            raise serializers.ValidationError("Username and new password should be different")
        return data

    @staticmethod
    def contains_special_character(value):

        regex = re.compile('[@_!#$%^&*()<>?/\|}{~:]')

        if regex.search(value) is not None:
            return True

        return False

    def validate_newPassword(self, value):
        """
        check if new password meets the specs
        min 1 lowercase and 1 uppercase alphabet
        1 number
        1 special character
        8-16 character length
        """

        if len(value) < 8 or len(value) > 16:
            raise serializers.ValidationError("password should be between 8 and 16 characters long")

        if not any(x.isupper() for x in value):
            raise serializers.ValidationError("password should have minimum one upper case alphabet")

        if not any(x.islower() for x in value):
            raise serializers.ValidationError("password should have minimum one lower case alphabet")

        if not any(x.isdigit() for x in value):
            raise serializers.ValidationError("password should have minimum one number")

        valid_special_characters = {'@', '_', '!', '#', '$', '%', '^', '&', '*', '(', ')',
                                    '<', '>', '?', '/', '|', '{', '}', '~', ':'}

        if not any(x in valid_special_characters for x in value):
            raise serializers.ValidationError("password should have minimum one special character")

        return value


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
