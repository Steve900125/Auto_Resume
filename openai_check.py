import importlib

def check_openai_package():
    try:
        importlib.import_module('openai')
        print("openai 套件已經安裝")
    except ImportError:
        print("openai 套件未安裝")
        install_openai_package()

def install_openai_package():
    try:
        import subprocess
        subprocess.check_call(["pip", "install", "openai"])
        print("openai 套件安裝成功")
    except Exception as e:
        print("安裝 openai 套件時出現錯誤:", str(e))