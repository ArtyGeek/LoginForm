describe('Bank:LoginForm', function() 
{	
	function navigate() {
		browser().navigateTo('../../app/index.html');
	}
	
	it('should have email input', function()
	{
		navigate();
		expect(element('form input:eq(0)').attr('name')).toBe('uEmail');
	});

	it('should have password input', function()
	{
		navigate();
		expect(element('form input:eq(1)').attr('name')).toBe('uPassword');
	});

	it('should have submit button', function()
	{
		navigate();
		expect(element('form input:eq(2)').val()).toBe('Login');
	});

	it('should have submit button to be disabled', function()
	{
		navigate();
		expect(element('form input:eq(2)').attr('disabled')).toBe('disabled');
	});

	it('should have submit button to be enabled when correct info entered', function()
	{
		// Arrange
		navigate();
		var emailInput = inputByName('uEmail');
		var passwordInput = inputByName('uPassword');
		var submitButton = element('form input:eq(2)');

		// Act
		emailInput.enter('test@example.com');
		passwordInput.enter('password');

		// Assert
		expect(submitButton.attr('disabled')).toBe(undefined);
	});
});