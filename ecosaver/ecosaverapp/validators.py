# ecosaverapp/validators.py
from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _

class ValidPasswordValidator:
    def __init__(self, *args, **kwargs):
        pass

    def validate(self, password, user=None):
        # Check if the password contains a mixture of uppercase letters, lowercase letters, digits, and special characters.
        if not any(char.isupper() for char in password):
            raise ValidationError(_("The password must contain at least one uppercase letter."))
        if not any(char.islower() for char in password):
            raise ValidationError(_("The password must contain at least one lowercase letter."))
        if not any(char.isdigit() for char in password):
            raise ValidationError(_("The password must contain at least one digit."))
        if not any(char in r'!@#$%^&*()-_=+[]{}|;:,.<>?/' for char in password):
            raise ValidationError(_("The password must contain at least one special character."))

    def get_help_text(self):
        return _(
            "Your password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        )

def validate_username(value):
    if not any(char.isalpha() for char in value) or not any(char.isdigit() for char in value):
        raise ValidationError(
            _("Username must contain a mix of letters and numbers."),
            code='invalid_username',
        )
