{ pkgs }: {
	deps = [
  pkgs.neofetch
  pkgs.chromium
  pkgs.toybox
  pkgs.nodePackages.prettier
		pkgs.fish
  pkgs.nano
  pkgs.nodejs-18_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.yarn
        pkgs.replitPackages.jest
	];
}